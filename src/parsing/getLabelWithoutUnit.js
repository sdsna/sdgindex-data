import getIndicatorUnit from "./getIndicatorUnit";

/**
 * Remove the unit from the indicator label. Assumes that the unit is wrapped in
 * parentheses. For example: "CO₂ emissions (kg/capita)"
 * @param {string} label - the label with unit
 * @return {string} the label without the unit
 */
export const getLabelWithoutUnit = (label) => {
  const unit = getIndicatorUnit(label);

  if (!unit) return label;

  return label.replace(`(${unit})`, "").trim();
};
