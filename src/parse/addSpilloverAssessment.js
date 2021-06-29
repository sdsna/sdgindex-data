/**
 * Add the spillover assessment to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 */

export const addSpilloverAssessment = (dataStore) => {
  dataStore.assessments.push({
    id: "SPI",
    dataId: "SPI",
    label: "Spillover score",
    slug: "spillovers",
    description:
      "Each country's actions can have positive or negative effects on other countries' abilities to achieve the SDGs. The Spillover Index assesses such spillovers along three dimensions: environmental & social impacts embodied into trade, economy & finance, and security. A higher score means that a country causes more positive and fewer negative spillover effects.",
    type: "custom",
  });
};
