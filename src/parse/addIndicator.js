import urlSlug from "url-slug";
import { addAssessment } from "./addAssessment";
import { getLabelWithoutUnit } from "./getLabelWithoutUnit";
import { getIndicatorUnit } from "./getIndicatorUnit";
import { getIndicators } from "../getIndicators";

/**
 * Add an indicator to the store
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
 * @return {Object} the indicator that was added to the store
 */
export const addIndicator = ({
  id,
  goalNumber,
  labelWithUnit,
  slug,
  label,
  unit,
  ...params
}) => {
  if (!label) label = getLabelWithoutUnit(labelWithUnit);
  if (!unit) unit = getIndicatorUnit(labelWithUnit);
  if (!slug) slug = urlSlug(label);

  return addAssessment({
    id,
    dataId: getIndicators().length + 1,
    goalNumber,
    slug,
    label,
    unit,
    ...params,
    type: "indicator",
  });
};
