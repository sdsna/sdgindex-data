import { ensureDirSync, writeJsonSync } from "fs-extra";
import path from "path";
import { getDataDir } from "../config";
import { store } from "../store";
import { determineObjectEncoding } from "../utilities/determineObjectEncoding";
import { encodeObject } from "../utilities/encodeObject";

// Write data to human-friendly and minified JSON file with the given name
const writeDataToJson = (name, data, dataDir) => {
  // Write human-friendly
  writeJsonSync(path.join(dataDir, `${name}-raw.json`), data, { spaces: 2 });

  // Write minified
  writeJsonSync(path.join(dataDir, `${name}.json`), data);
};

/**
 * Write the store to a series of human-readable and minified JSON files.
 * These can then be loaded/imported in the data visualization.
 * One JSON file is created for each type of data (assessments, regions,
 * observations, and timeseries).
 * @param {string} [context] - The context for data storage (e.g., 'benin' for Benin-specific data)
 */
export const writeStoreToJson = (context) => {
  const dataDir = getDataDir(context);

  // Ensure directory exists
  ensureDirSync(dataDir);

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

  writeDataToJson(
    "assessments",
    { assessments: store.assessments || [] },
    dataDir
  );
  writeDataToJson("regions", { regions: store.regions || [] }, dataDir);
  writeDataToJson(
    "observations",
    {
      observations: encodedObservations,
      observationEncoding,
    },
    dataDir
  );
  writeDataToJson(
    "timeseries",
    { timeseries: store.timeseries || {} },
    dataDir
  );
};
