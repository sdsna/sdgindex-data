import path from "path";
import { ensureDirSync, writeJsonSync } from "fs-extra";
import { determineObjectEncoding } from "../utilities/determineObjectEncoding";
import { encodeObject } from "../utilities/encodeObject";
import { store } from "../store";
import { DATA_DIR } from "../config";

// The datasets to write to JSON
const DATASETS = ["assessments", "regions", "observations", "timeseries"];

// Empty fallback array/object, depending on type
const FALLBACK = {
  assessments: [],
  regions: [],
  observations: {},
  timeseries: [],
};

// Write data to human-friendly and minified JSON file with the given name
const writeDataToJson = (name, data) => {
  // Write human-friendly
  writeJsonSync(path.join(DATA_DIR, `${name}-raw.json`), data, { spaces: 2 });

  // Write minified
  writeJsonSync(path.join(DATA_DIR, `${name}.json`), data);
};

/**
 * Write the store to a series of human-readable and minified JSON files.
 * These can then be loaded/imported in the data visualization.
 * One JSON file is created for each type of data (assessments, regions,
 * observations, and timeseries).
 */
export const writeStoreToJson = () => {
  // Ensure directory exists
  ensureDirSync(DATA_DIR);

  // Determine encoding for compressing observation data
  const observations = store.observations || {};
  const observationEncoding = determineObjectEncoding(
    Object.values(observations)
  );

  // Encode all observations
  const encodedObservations = Object.entries(observations).reduce(
    (encodedObservations, [id, observation]) => ({
      ...encodedObservations,
      [id]: encodeObject(observation, observationEncoding),
    }),
    {}
  );

  writeDataToJson("assessments", { assessments: store.assessments || [] });
  writeDataToJson("regions", { regions: store.regions || [] });
  writeDataToJson("observations", {
    observations: encodedObservations,
    observationEncoding,
  });
  writeDataToJson("timeseries", { timeseries: store.timeseries || [] });
};
