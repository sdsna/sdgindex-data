import { SDGS } from "../sdgs/getSdg";

/**
 * Add all goals to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 */
export const addGoals = (dataStore) => {
  SDGS.forEach((row) =>
    dataStore.assessments.push({
      id: "SDG" + row.number,
      dataId: "SDG" + row.number,
      number: row.number,
      label: row.label,
      description: row.description,
      type: "goal",
    })
  );
};
