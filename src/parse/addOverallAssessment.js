import { addAssessment } from "./addAssessment";
import { OVERALL_ASSESSMENT_ID } from "../assessments/config";

/**
 * Add the overall assessment to the store
 * @param {Object} [params] -
 * any custom parameters to add to the assessment or default properties to
 * overwrite
 * @return {Object} the overall assessment that was added to the store
 */
export const addOverallAssessment = (params = {}) =>
  addAssessment({
    id: OVERALL_ASSESSMENT_ID,
    dataId: OVERALL_ASSESSMENT_ID,
    slug: "overall",
    label: "Overall score",
    description:
      "The overall score measures a country's total progress towards achieving all 17 SDGs. The score can be interpreted as a percentage of SDG achievement. A score of 100 indicates that all SDGs have been achieved.",
    type: "custom",
    ...params,
  });
