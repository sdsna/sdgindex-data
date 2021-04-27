import { dataStore } from '/dataStore'
import { findRegionById } from '@root'

test("If a region is returned by ID, in case itsn't included", () => {
    let region = {
        id: "CO",
        dataId: 10,
        slug: "colorado",
        name: "Colorado",
        type: "state"
    };

    expect(findRegionById(dataStore, region.id)).toEqual(region);
});