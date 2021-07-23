import { addAssessment } from "./addAssessment";
import { SPILLOVER_ASSESSMENT_ID } from "../assessments/config";

/**
 * Add the spillover assessment to the store
 * @param {Object} [params] -
 * any custom parameters to add to the assessment or default properties to
 * overwrite
 * @return {Object} the spillover assessment that was added to the store
 */
export const addSpilloverAssessment = (params = {}) =>
  addAssessment({
    id: SPILLOVER_ASSESSMENT_ID,
    dataId: SPILLOVER_ASSESSMENT_ID,
    slug: "spillovers",
    label: "Spillover score",
    description:
      "Each country's actions can have positive or negative effects on other countries' abilities to achieve the SDGs. The Spillover Index assesses such spillovers along three dimensions: environmental & social impacts embodied into trade, economy & finance, and security. A higher score means that a country causes more positive and fewer negative spillover effects.",
    type: "custom",
    ...params,
  });
