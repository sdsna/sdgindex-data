import { OVERALL_ASSESSMENT_ID } from "../assessments/config";

/**
 * Add the overall assessment to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 */
export const addOverallAssessment = (dataStore) => {
  dataStore.assessments.push({
    id: OVERALL_ASSESSMENT_ID,
    dataId: OVERALL_ASSESSMENT_ID,
    label: "Overall score",
    slug: "overall",
    description:
      "The overall score measures a country's total progress towards achieving all 17 SDGs. The score can be interpreted as a percentage of SDG achievement. A score of 100 indicates that all SDGs have been achieved.",
    type: "custom",
  });
};
