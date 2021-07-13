import urlSlug from "url-slug";
import { getLabelWithoutUnit } from "./getLabelWithoutUnit";
import { getIndicatorUnit } from "./getIndicatorUnit";
import { getIndicators } from "../getIndicators";

/**
 * Add indicator to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 * @param {Object} indicator
 * @param {string} indicator.id - The unique ID for the indicator
 * @param {number} indicator.goalNumber -
 * The goal to which the indicator belongs, e.g., `1` for SDG 1, `2` for SDG 2.
 * @param {string} [indicator.labelWithUnit] -
 * The label for the indicater, including the unit. Used to automatically
 * generate the slug, label, and unit. Alternatively, slug, label, and unit
 * properties can be set manually.
 * @param {string} [indicator.slug] -
 * The slug for the indicator, usually automatically generated from
 * labelWithUnit.
 * @param {string} [indicator.label] -
 * The label for the indicator, usually automatically generated from
 * labelWithUnit.
 * @param {string} [indicator.unit] -
 * The unit for the indicator, usually automatically generated from
 * labelWithUnit.
 * @param {...Object} [indicator.params] -
 * any other params to add to the indicator, such as description or source
 */
export const addIndicator = (
  dataStore,
  { id, goalNumber, labelWithUnit, slug, label, unit, ...params }
) => {
  if (!label) label = getLabelWithoutUnit(labelWithUnit);
  if (!unit) unit = getIndicatorUnit(labelWithUnit);
  if (!slug) slug = urlSlug(label);

  if (!dataStore.assessments) dataStore.assessments = [];
  dataStore.assessments.push({
    id,
    dataId: getIndicators(dataStore).length + 1,
    goalNumber,
    slug,
    label,
    unit,
    ...params,
    type: "indicator",
  });
};
