import { dataStore } from './dataStore'
import { findObservationByRegionAndAssessment } from '@root'

test("If an observation is returned by region and assessment, in case it isn't included", () => {
    let region = {
        id: "CO",
        dataId: 10,
        slug: "colorado",
        name: "Colorado",
        type: "state"
    };

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

    let observation = { id: "10-1", v: 20.3, c: "red" };

    expect(findObservationByRegionAndAssessment(dataStore, region, assessment)).toEqual(observation);
});