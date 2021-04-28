import { dataStore } from './dataStore'
import { findStateByRegionId } from '@root'

test("If a state is returned by region ID, in case itsn't included", () => {
    let region = {
        id: "CO",
        dataId: 10,
        state: "Denver",
        slug: "colorado",
        name: "Colorado",
        type: "state"
    };
    
    expect(findStateByRegionId(dataStore, region.id)).toEqual(region.state);
});