import { addGoal } from "./addGoal";

/**
 * Add all goals to the store. Optionally, skip certain goals by passing
 * the `except` argument.
 * @param {Object} [options]
 * @param {number[]} [options.except] -
 * the goals to skip, e.g., `1` for SDG 1, `2` for SDG 2.
 * @return {Object[]} an array of the goals that were added to the store
 */
export const addGoals = ({ except = [] } = {}) => {
  const goals = [];

  for (let number = 1; number <= 17; number++) {
    // Skip any numbers in the except array
    if (except.includes(number)) continue;

    goals.push(addGoal({ number }));
  }

  return goals;
};
