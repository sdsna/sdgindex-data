import path from "path";
import { ensureDirSync, writeJsonSync } from "fs-extra";
import { store } from "../store";
import { DATA_DIR } from "../config";

/**
 * Write the store to a series of human-readable and minified JSON files.
 * These can then be loaded/imported in the data visualization.
 * One JSON file is created for each type of data (assessments, regions,
 * observations, and timeseries).
 */
export const writeStoreToJson = () => {
  // Ensure directory exists
  ensureDirSync(DATA_DIR);

  ["assessments", "regions", "observations", "timeseries"].forEach((type) => {
    const data = { [type]: store[type] || [] };

    // Write human-friendly
    writeJsonSync(path.join(DATA_DIR, `${type}-raw.json`), data, { spaces: 2 });

    // Write minified
    writeJsonSync(path.join(DATA_DIR, `${type}.json`), data);
  });
};
