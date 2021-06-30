import urlSlug from "url-slug";
import { getLabelWithoutUnit } from "./getLabelWithoutUnit";
import { getIndicatorUnit } from "./getIndicatorUnit";
import { getIndicators } from "../getIndicators";

/**
 * Add indicator to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 */
export const addIndicator = (dataStore, { labelWithUnit, ...params }) => {
  const label = getLabelWithoutUnit(labelWithUnit);
  dataStore.assessments.push({
    slug: urlSlug(label),
    label,
    unit: getIndicatorUnit(labelWithUnit),
    dataId: getIndicators(dataStore).length + 1,
    ...params,
    type: "indicator",
  });
};
