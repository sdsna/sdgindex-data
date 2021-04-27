import { dataStore } from './dataStore'
import { findRegionBySlug } from '@root'

test("If a region is returned by SLUG, in case itsn't included", () => {
    let region = {
        id: "CO",
        dataId: 10,
        slug: "colorado",
        name: "Colorado",
        type: "state"
    };

    expect(findRegionBySlug(dataStore, region.slug)).toEqual(region);
});