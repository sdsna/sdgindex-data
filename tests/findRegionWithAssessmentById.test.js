import { dataStore } from './dataStore'
import { findRegionWithAssessmentById } from '@root'

test("If a region is returned with assessment by ID, in case itsn't included", () => {
    let region = {
        id: "10-1",
        v: 20.3,
        c: "red",
        id: "CO",
        dataId: 10,
        slug: "colorado",
        name: "Colorado",
        type: "state"
    };
    //in order to check
    let assessment = {
        id: "sdg1v2_povline",
        dataId: 1,
        goalNumber: 1,
        slug: "sdg1v2_povline",
        label: "Living Below Poverty Line",
        unit: "%",
        description: "Percent of people living below the national poverty line",
        type: "indicator",
        year: "2018",
        longTermObjective: 3.65,
        reference: "ACS",
    };

    expect(findRegionWithAssessmentById(dataStore, assessment, region.idd)).toEqual(region);
});