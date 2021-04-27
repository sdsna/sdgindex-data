import { dataStore } from './dataStore'
import { findRegionWithAssessmentById } from '@root'

test("If a region is returned with assessment by ID, in case itsn't included", () => {
    let assessment = {
        id: "10-1",
        v: 20.3,
        c: "red"
    };
    
    let region = {
        id: "CO",
        dataId: 10,
        slug: "colorado",
        name: "Colorado",
        type: "state"
    };

    expect(findRegionWithAssessmentById(dataStore, assessment, region.id)).toEqual(data);
});