import { GOALS } from "./goals";

/**
 * Add all goals to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 */

export const addGoals = (dataStore) => {
  GOALS.forEach((row) =>
    dataStore.assessments.push({
      id: row.id,
      dataId: row.dataId,
      number: row.number,
      label: row.label,
      description: row.description,
      type: row.type,
    })
  );
};
