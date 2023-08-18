# @sdgindex/data

Package for the SDG Index. Helpers for managing the data for our data visualizations.

Full helper documentation can be found at: https://code.sdgindex.org/

# Installation

Just run `npm install @sdgindex/data`.

# Usage

## Parsing Data

You can use the `@sdgindex/data/parse` helpers for transforming data from Excel into JSON format. The recommended approach is to create a `data/` folder with a `prepare.js` file:

```js
// data/prepare.js
const { writeStoreToJson } = require("@sdgindex/data/parse");
const setUpAssessments = require("./setUpAssessments");
const setUpRegions = require("./setUpRegions");
const setUpObservations = require("./setUpObservations");
const setUpTimeseries = require("./setUpTimeseries");

// Get data from source Excel files
setUpAssessments();
setUpRegions();
setUpObservations();
setUpTimeseries();

// Write data
writeStoreToJson();
```

Each `setUp`-script takes care of one aspect of the data. The `writeStoreToJson()` function will write all parsed data as JSON files in `public/data/`.

## Fetching Data on Mount

All data should be loaded after the page has finished rendering on the client. This way, platform navigation will be fast and smooth.

Include the following hook in the `_app.js` page:

```js
// pages/_app.js
import { useEffect } from 'react';
import { loadData } from "@sdgindex/data";

function MyApp() {
  // ...

  // Load data
  useEffect(() => {
    loadData({ timeseries: true })
  }, [])

  return (
    // ...
  )
};
```

## Fetching Data on Page Navigation

Every page that needs to access some data from the store should load the data in its `getStaticProps`.
Explicitly map the results from the data store into your own custom object. This reduces the chance for errors later. Any `@sdgindex/data` helpers should be used in `getStaticProps` only. You should not be using any helpers in the rendering of the page.

```js
// pages/profiles.js

const Profiles = () => {
  /* ... */
};

import { loadData, getRegions } from "@sdgindex/data";
import { isCountry } from "@sdgindex/data/regions";

export async function getStaticProps() {
  await loadData();

  // Sort country by name
  const regions = getRegions()
    .filter(isCountry)
    .sort((a, b) => a.name.localeCompare(b.name));

  return {
    regions: regions.map((region) => ({
      id: region.id,
      name: region.name,
      slug: region.slug,
      type: region.type,
    })),
  };
}
```

If a page has [Dynamic Routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes) and uses `getStaticProps`, it needs to define a list of paths to be statically generated.

**Therefore, on this page both `getStaticProps` and `getStaticPaths` are necessary.**

When you export a function called `getStaticPaths` (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by `getStaticPaths`.

If you are loading data from `@sdgindex/data`, you will need to use the same approach as for `getStaticProps` to generate the paths to pre-render.

Building on top of the previous example, let's say we are now building a page for individual country profiles. We're not going to create 193 pages for each country if they all share the same structure. We'll create `[slug].js` where `slug` represents the country slug variable. However, we need to tell Next.js what pages to statically pre-render at build time. In this case, `slug` can be one of 193 different options.

The changes made to the code are:

- the addition of `getStaticPaths` to create the 193 possible paths.
- the refactoring of `getStaticProps` that now has a `context` as a parameter in which we find the a property called `params`. `params` contains the `slug` (`slug` because this is how we named the file) that has been passed to the `getStaticProps`.

```js
// pages/profiles/[slug].js

const IndividualCountryProfile = () => {
  /* ... */
};

// Add findRegionBySlug to get the data for specific region based on slug
import { loadData, getRegions, findRegionBySlug } from "@sdgindex/data";
import { isCountry } from "@sdgindex/data/regions";

// This function gets called at build time
export async function getStaticPaths() {
  await loadData();

  // Get the paths we want to pre-render based on regions
  const regions = getRegions().filter(isCountry);
  const paths = regions.map(({ slug }) => ({
    params: { slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Country slug
  const { slug } = params;
  // Ensure data is loaded
  await loadData();

  // Get the data
  const region = findRegionBySlug(slug);

  return {
    region: {
      id: region.id,
      name: region.name,
      slug: region.slug,
      type: region.type,
    },
  };
}
```

### Note

If the objects in the array of objects loaded by `loadData` don't all have the same properties (ie: if some regions have `type : country` and at least one region has no type `type : undefined`), as `getStaticProps` passes the data in json, instead of accepting `undefined`, you have to use `null` as the value for your variables.

The value `undefined` denotes that a variable has been declared, but hasn't been assigned any value. So, the value of the variable is `undefined`. On the other hand, `null` refers to a non-existent object, which basically means 'empty' or 'nothing'.

Using the above example: we need to delare in `getStaticProps` that if type doesn't exist, return `null`.

```js
return {
  region: {
    id: region.id,
    name: region.name,
    slug: region.slug,
    type: region?.type,
    // or...
    // type: region.type || null
  },
};
```

## Fetching Data in Component

You may need to access additional data from the store when the user interacts with the page (e.g., side menu showing timeseries data). In those cases, you should use the `useDataStore` hook and ensure that data is fully loaded before making use of any of the `@sdgindex/data` helpers.

Again, this should only be used in components that are rendered client-side only after some sort of user interaction.
For data that is rendered by default, use getInitialProps to
fetch all necessary data.

```js
// components/MyComponent.js
import { getRegions, useDataStore } from "@sdgindex/data";

const MyComponent = () => {
  // useDataStore uses useState internally.
  // The value of isLoaded will automatically update
  // when the data has fully loaded.
  const { isLoaded } = useDataStore();

  if (!isLoaded) return "Loading...";

  // You can now use any @sdgindex/data helpers
  const regions = getRegions();

  return <div>{regions.map((region) => region.name)}</div>;
};
```

# Development

Sometimes, you may want to use your local copy of `@sdgindex/data` in your
local Next.js app. For example, to test a new feature that you're developing on
`@sdgindex/data`. In those cases, you can navigate to your Next.js app and run
`npm link ../path/to/@sdgindex/data` to use the local version of
`@sdgindex/data`.

Remember to disconnect for this local copy by running `npm unlink`
