import { getSdg } from "../sdgs/getSdg";

/**
 * Add all goals to the dataStore. Optionally, skip certain goals by passing
 * the `except` argument.
 * @param {Object} dataStore - The store where the data are saved
 * @param {Object} [options]
 * @param {number[]} [options.except] -
 * the goals to skip, e.g., `1` for SDG 1, `2` for SDG 2.
 */
export const addGoals = (dataStore, { except = [] } = {}) => {
  if (!dataStore.assessments) dataStore.assessments = [];

  for (let number = 1; number <= 17; number++) {
    // Skip any numbers in the except array
    if (except.includes(number)) continue;

    const goal = getSdg(number);
    dataStore.assessments.push({
      id: "SDG" + number,
      dataId: "SDG" + number,
      number,
      label: goal.label,
      description: goal.description,
      type: "goal",
    });
  }
};
