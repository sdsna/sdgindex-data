import getIndicatorUnit from "./getIndicatorUnit";

// Helper for getting just the label from an indicator
export const getLabelWithoutUnit = (label) => {
  const unit = getIndicatorUnit(label);

  if (!unit) return label;

  return label.replace(`(${unit})`, "").trim();
};
