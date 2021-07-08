import { SPILLOVER_ASSESSMENT_ID } from "../assessments/config";

/**
 * Add the spillover assessment to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 * @param {Object} [params] -
 * any custom parameters to add to the assessment or default properties to
 * overwrite
 */
export const addSpilloverAssessment = (dataStore, params = {}) => {
  if (!dataStore.assessments) dataStore.assessments = [];
  dataStore.assessments.push({
    id: SPILLOVER_ASSESSMENT_ID,
    dataId: SPILLOVER_ASSESSMENT_ID,
    slug: "spillovers",
    label: "Spillover score",
    description:
      "Each country's actions can have positive or negative effects on other countries' abilities to achieve the SDGs. The Spillover Index assesses such spillovers along three dimensions: environmental & social impacts embodied into trade, economy & finance, and security. A higher score means that a country causes more positive and fewer negative spillover effects.",
    type: "custom",
    ...params,
  });
};
