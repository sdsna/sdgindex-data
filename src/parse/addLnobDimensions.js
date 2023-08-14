import { addLnobDimension } from "./addLnobDimension";

/**
 * Add all lnobs to the store. Optionally, skip certain lnobs by passing
 * the `except` argument.
 * @param {Object} [options]
 * @param {number[]} [options.except] -
 * the lnobs to skip, e.g., `1` for LNOB 1, `2` for LNOB 2.
 * @return {Object[]} an array of the lnobs that were added to the store
 */
export const addLnobDimensions = ({ except = [] } = {}) => {
  const lnobDimensions = [];

  for (let number = 1; number <= 4; number++) {
    // Skip any numbers in the except array
    if (except.includes(number)) continue;

    lnobDimensions.push(addLnobDimension({ number }));
  }

  return lnobDimensions;
};
