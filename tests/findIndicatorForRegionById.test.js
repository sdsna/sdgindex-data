import { dataStore } from './dataStore'
import { findIndicatorForRegionById } from '@root'
import { getIndicators } from '@root'

test("If an indicator is returned for region by ID, in case it isn't included", () => {
    let region = {
        id: "CO",
        dataId: 10,
        slug: "colorado",
        name: "Colorado",
        type: "state"
    };

    let indicator = {
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

    const findIndicatorById = (dataStore, id) =>
        getIndicators(dataStore).find((indicator) => indicator.id === id);

    expect(findIndicatorForRegionById(dataStore, region, indicator.id)).ToEqual(observation);
    /* findIndicatorById(dataStore, indicator.id).id */ 
    /* if it doesn't work, make an object (data) that contains the observation / assessment */
}); 