import faker from "faker";
import { random } from "lodash";
import { store, getGoals, getLnobDimensions } from "@sdgindex/data";
import {
  addIndicator,
  addGoal,
  addLnobDimension,
  addObservation,
  addOverallAssessment,
  addSpilloverAssessment,
  addLnobAssessment,
  addRegion,
  addTimeseries,
} from "@sdgindex/data/parse";
import { determineObjectEncoding } from "private:@sdgindex/data/utilities/determineObjectEncoding";
import { encodeObject } from "private:@sdgindex/data/utilities/encodeObject";
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

export const addMockIndicatorForLnobDimension = ({ lnob, ...params } = {}) => {
  // Set up an associated lnob
  if (!lnob) lnob = getDefaultLnobDimensionForIndicators();

  return addIndicator({
    id: `LNOB${random(1, 4)}_${faker.internet.userName()}_${getUniqueId()}`,
    goalNumber: lnob.id,
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

// The default lnob to use for setting up indicators
let __defaultLnobDimensionForIndicators = null;
const getDefaultLnobDimensionForIndicators = () => {
  if (!__defaultLnobDimensionForIndicators)
    __defaultLnobDimensionForIndicators = addMockLnobDimension();

  return __defaultLnobDimensionForIndicators;
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

export const addMockLnobDimension = ({ number, ...params } = {}) => {
  // Identify a valid lnob to add (number 1 - 4)
  if (number == null) {
    // Get the lnob numbers that have already been added
    const lnobNumbers = getLnobDimensions().map((lnob) => lnob.number);
    for (let i = 1; i <= 4; i++) {
      if (!lnobNumbers.includes(i)) {
        number = i;
        break;
      }
    }
  }

  return addLnobDimension({ number, ...params });
};

export const addMockOverallAssessment = (params = {}) =>
  addOverallAssessment(params);

export const addMockSpilloverAssessment = (params = {}) =>
  addSpilloverAssessment(params);

export const addMockLnobAssessment = (params = {}) => addLnobAssessment(params);

export const addMockRegion = ({ name, ...params } = {}) => {
  if (!name) name = `${faker.address.country()} - ${getUniqueId()}`;

  return addRegion({
    id: `${faker.internet.userName()}_${getUniqueId()}`,
    name,
    type: faker.random.arrayElement(["country", "state", "city", "department"]),
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
      dataPoints: Array.from({ length: 2021 - 2000 + 1 }).map((_v, index) => ({
        year: 2000 + index,
        value: random(0, 1000),
      })),
    },
    timeseries
  );

  return addTimeseries({ assessment, region, ...timeseries });
};

export const addMockIndicators = ({ count = 5, ...params } = {}) =>
  Array.from({ length: count }).map(() => addMockIndicator(params));

export const addMockIndicatorsForLnobDimension = ({
  count = 4,
  ...params
} = {}) =>
  Array.from({ length: count }).map(() =>
    addMockIndicatorForLnobDimension(params)
  );

export const addMockGoals = ({ count = 5, ...params } = {}) =>
  Array.from({ length: count }).map(() => addMockGoal(params));

export const addMockLnobDimensions = ({ count = 2, ...params } = {}) =>
  Array.from({ length: count }).map(() => addMockLnobDimension(params));

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
