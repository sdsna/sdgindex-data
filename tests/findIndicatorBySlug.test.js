import { dataStore } from './dataStore'
import { findIndicatorBySlug } from '@root'

test("If an indicator is returned by SLUG, in case it isn't included", () => {
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
    expect(findIndicatorBySlug(dataStore, indicator.slug)).toEqual(indicator);
});