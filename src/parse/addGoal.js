import { addAssessment } from "./addAssessment";
import { getSdg } from "../sdgs/getSdg";

/**
 * Add a goal to the store.
 * @param {Object} params
 * @param {number} params.number -
 * the goals to add, e.g., `1` for SDG 1, `2` for SDG 2.
 * @param {string} [params.label] - can be used to overwrite the default label
 * @param {string} [params.description] -
 * can be used to overwrite the default description
 * @return {Object} the goal that was added to the store
 */
export const addGoal = ({ number, label, description }) => {
  const goalMetadata = getSdg(number);

  // Set default label and description for SDG
  if (!label) label = goalMetadata.label;
  if (!description) description = goalMetadata.description;

  return addAssessment({
    id: "SDG" + number,
    dataId: "SDG" + number,
    number,
    label,
    description,
    type: "goal",
  });
};
