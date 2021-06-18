import faker from "faker";
import { omit, random } from "lodash";
import renameKeys from "./renameKeys";

// Ensures that all IDs, data IDs, and slugs are unique
let __buildId = 0;
const getBuildId = () => __buildId++;

export const buildAssessment = (params = {}) => {
  const dataId = params.dataId || getBuildId();

  const assessment = {
    dataId: dataId,
    label: faker.company.catchPhrase(),
    description: faker.lorem.paragraph(),
    slug: `${faker.lorem.slug()}_${dataId}`,
  };

  return Object.assign(assessment, params);
};

export const buildIndicator = (params = {}) => {
  const dataId = params.dataId || getBuildId();

  // Set up an associated goal
  const goal = params.goal || buildGoal();

  return buildAssessment({
    dataId: dataId,
    id: `SDG${random(1, 17)}_${faker.internet.userName()}_${dataId}`,
    goalNumber: goal.number,
    type: "indicator",
    ...omit(params, "goal"),
  });
};

export const buildGoal = (params = {}) => {
  const dataId = params.dataId || getBuildId();
  return buildAssessment({
    dataId,
    id: `SDG${dataId}`,
    number: dataId,
    type: "goal",
    ...params,
  });
};

export const buildOverallAssessment = (params = {}) =>
  buildAssessment({ id: "TOT", slug: "overall", type: "custom", ...params });

export const buildRegion = (params = {}) => {
  const dataId = getBuildId();
  const name = params.name || `${faker.address.country()} - ${dataId}`;

  const region = {
    dataId: dataId,
    id: `${faker.internet.userName()}_${dataId}`,
    name: name,
    slug: faker.helpers.slugify(name),
    type: faker.random.arrayElement(["country", "state", "city"]),
  };

  return Object.assign(region, params);
};

export const buildObservation = ({ assessment, region, ...params } = {}) => {
  assessment ||= buildIndicator();
  region ||= buildRegion();

  // Convert keys
  renameKeys(params, {
    value: "v",
    score: "s",
    rank: "r",
    rating: "c",
    trend: "a",
    year: "y",
    imputed: "i",
  });

  const observation = {
    id: `${region.dataId}-${assessment.dataId}`,
    v: random(0, 1000),
    y: random(2000, 2021),
    s: random(0, 100),
    r: random(0, 100),
    c: faker.random.arrayElement(["green", "yellow", "orange", "red", "gray"]),
    a: faker.random.arrayElement(["↑", "➚", "→", "↓", "·"]),
  };

  return Object.assign(observation, params);
};

export const buildIndicators = ({ count = 5, ...params } = {}) =>
  Array.from({ length: count }).map(() => buildIndicator(params));

export const buildGoals = ({ count = 5, ...params } = {}) =>
  Array.from({ length: count }).map(() => buildGoal(params));

export const buildRegions = ({ count = 5, ...params } = {}) =>
  Array.from({ length: count }).map(() => buildRegion(params));

export const buildObservations = ({ count = 5, ...params } = {}) =>
  Array.from({ length: count }).map(() => buildObservation(params));
