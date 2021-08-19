import { addAssessment } from "./addAssessment";
import { LNOB_ASSESSMENT_ID } from "../assessments/config";

/**
 * Add the spillover assessment to the store
 * @param {Object} [params] -
 * any custom parameters to add to the assessment or default properties to
 * overwrite
 * @return {Object} the spillover assessment that was added to the store
 */
export const addLnobAssessment = (params = {}) =>
  addAssessment({
    id: LNOB_ASSESSMENT_ID,
    dataId: LNOB_ASSESSMENT_ID,
    slug: "leave-no-one-behind",
    label: "Leave-no-one-behind score",
    description:
      'The SDGs are guided by the principle to "leave no one behind" (LNOB). The Leave-No-One-Behind Index tracks inequalities along four dimensions: poverty, services, gender, and income. A higher score means that fewer population groups are being left behind.',
    type: "custom",
    ...params,
  });
