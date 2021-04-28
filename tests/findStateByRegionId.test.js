import { dataStore } from './dataStore'
import { findStateByRegionId } from '@root'

test("If a state is returned by region ID, in case itsn't included", () => {
    let region = {
        id: "CA",
        dataId: 15,
        state: "California", 
        slug: "california",
        name: "California",
        type: "state",
        };
    
    expect(findStateByRegionId(dataStore, region.id)).toEqual(region.state);
});