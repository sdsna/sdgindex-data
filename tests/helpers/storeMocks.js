import faker from "faker";
import { random } from "lodash";
import { store, getGoals } from "@sdgindex/data";
import {
  addIndicator,
  addGoal,
  addObservation,
  addOverallAssessment,
  addSpilloverAssessment,
  addRegion,
  addTimeseries,
} from "@sdgindex/data/parse";
import { determineObjectEncoding } from "private:@sdgindex/data/utilities/determineObjectEncoding";
import { encodeObject } from "private:@sdgindex/data/utilities/encodeObject";
import { START_YEAR, END_YEAR } from "../../src/timeseries/config";
import resetStore from "./resetStore";

// Clear mock store before each test
beforeEach(resetStore);

// Ensures that all IDs are unique
let __buildId = 0;
const getUniqueId = () => __buildId++;

export const addMockIndicator = ({ goal, ...params } = {}) => {
  // Set up an associated goal
  if (!goal) goal = getDefaultGoalForIndicators();

  return addIndicator({
    id: `SDG${random(1, 17)}_${faker.internet.userName()}_${getUniqueId()}`,
    goalNumber: goal.number,
    labelWithUnit: `${faker.company.catchPhrase()}_${getUniqueId()}`,
    ...params,
  });
};

// The default goal to use for setting up indicators
let __defaultGoalForIndicators = null;
const getDefaultGoalForIndicators = () => {
  if (!__defaultGoalForIndicators) __defaultGoalForIndicators = addMockGoal();

  return __defaultGoalForIndicators;
};

export const addMockGoal = ({ number, ...params } = {}) => {
  // Identify a valid goal to add (number 1 - 17)
  if (number == null) {
    // Get the goal numbers that have already been added
    const goalNumbers = getGoals().map((goal) => goal.number);
    for (let i = 1; i <= 17; i++) {
      if (!goalNumbers.includes(i)) {
        number = i;
        break;
      }
    }
  }

  return addGoal({ number, ...params });
};

export const addMockOverallAssessment = (params = {}) =>
  addOverallAssessment(params);

export const addMockSpilloverAssessment = (params = {}) =>
  addSpilloverAssessment(params);

export const addMockRegion = ({ name, ...params } = {}) => {
  if (!name) name = `${faker.address.country()} - ${getUniqueId()}`;

  return addRegion({
    id: `${faker.internet.userName()}_${getUniqueId()}`,
    name,
    type: faker.random.arrayElement(["country", "state", "city"]),
    ...params,
  });
};

export const addMockObservation = ({
  assessment,
  region,
  ...observation
} = {}) => {
  if (!assessment) assessment = addMockIndicator();
  if (!region) region = addMockRegion();

  // Apply default values to observation
  observation = Object.assign(
    {
      value: random(0, 1000),
      year: random(2000, 2021),
      score: random(0, 100),
      rank: random(0, 100),
      rating: faker.random.arrayElement([
        "green",
        "yellow",
        "orange",
        "red",
        "gray",
      ]),
      trend: faker.random.arrayElement(["↑", "➚", "→", "↓", "•"]),
    },
    observation
  );

  return addObservation({ assessment, region, ...observation });
};

export const addMockTimeseries = ({
  assessment,
  region,
  ...timeseries
} = {}) => {
  if (!assessment) assessment = addMockIndicator();
  if (!region) region = addMockRegion();

  // Apply default values to timeseries
  timeseries = Object.assign(
    {
      dataPoints: Array.from({ length: END_YEAR - START_YEAR + 1 }).map(
        (_v, year) => ({
          year: year + START_YEAR,
          value: random(0, 1000),
        })
      ),
    },
    timeseries
  );

  return addTimeseries({ assessment, region, ...timeseries });
};

export const addMockIndicators = ({ count = 5, ...params } = {}) =>
  Array.from({ length: count }).map(() => addMockIndicator(params));

export const addMockGoals = ({ count = 5, ...params } = {}) =>
  Array.from({ length: count }).map(() => addMockGoal(params));

export const addMockRegions = ({ count = 5, ...params } = {}) =>
  Array.from({ length: count }).map(() => addMockRegion(params));

export const addMockObservations = ({ count = 5, ...params } = {}) =>
  Array.from({ length: count }).map(() => addMockObservation(params));

export const addMockMultipleTimeseries = ({ count = 5, ...params } = {}) =>
  Array.from({ length: count }).map(() => addMockTimeseries(params));

export const mockEncodeObservations = () => {
  store.observationEncoding = determineObjectEncoding(
    Object.values(store.observations)
  );

  Object.entries(store.observations).map(([id, observation]) => {
    store.observations[id] = encodeObject(
      observation,
      store.observationEncoding
    );
  });
};
