import path from "path";
import { writeJsonSync } from "fs-extra";

/**
 * Write the JSON data as a human-readable (-raw.json) and minified #
 * version (.json).
 * @param {string} dir - the directory to write the data to
 * @param {string} name - the name of the file to write
 * @param {Object} data - the data to write
 */
export const writeData = (dir, name, data) => {
  // Write human-friendly
  writeJsonSync(path.join(dir, `${name}-raw.json`), data, { spaces: 2 });

  // Write minified
  writeJsonSync(path.join(dir, `${name}.json`), data);
};
