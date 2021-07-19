# @sdgindex/data

Package for https://www.sdgindex.org. Helpers for managing the data for our data visualizations.

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

Every page that needs to access some data from the store should
load the data in its `getInitialProps`. Explicitly map the results from the data store into your own custom object. This reduces the chance for errors later. Any `@sdgindex/data` helpers should be used in `getInitialProps` only. You should not be using any helpers in the rendering of the page.

```js
// pages/profiles.js

const Profiles = () => {
  /* ... */
};

import { loadData, getRegions } from "@sdgindex/data";
import { isCountry } from "@sdgindex/data/regions";

Profiles.getInitialProps = async ({}) => {
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
`npm install ../path/to/@sdgindex/data` to install the local version of
`@sdgindex/data`.

To avoid issues with duplicate versions of React, you will also need to
temporarily link `react` and `react-dom` to the `@sdgindex/data` package.
For this, run

```
npm install ../path/to/@sdgindex/data/node_modules/react
npm install ../path/to/@sdgindex/data/node_modules/react-dom
```
