import { addAssessment } from "./addAssessment";
import { getLnobDimension } from "../sdgs/getLnobDimension";

/**
 * Add a LNOB to the store.
 * @param {Object} params
 * @param {number} params.number -
 * the LNOBs to add, e.g., `1` for LNOB 1, `2` for LNOB 2.
 * @param {string} [params.label] - can be used to overwrite the default label
 * @param {string} [params.description] -
 * can be used to overwrite the default description
 * @return {Object} the LNOB that was added to the store
 */
export const addLnobDimension = ({ number, category, label, description }) => {
  const lnobMetadata = getLnobDimension(number);

  // Set default label and description for LNOB
  if (!label) label = lnobMetadata.label;
  if (!description) description = lnobMetadata.description;
  if (!category) category = lnobMetadata.category;

  return addAssessment({
    id: "LNOB" + number,
    dataId: "LNOB" + number,
    number,
    category,
    label,
    description,
    type: "lnob",
  });
};
