// Write the data file in human-readable and minified version
import path from "path";
import { writeJsonSync } from "fs-extra";

export const writeData = (dir, name, data) => {
  // Write human-friendly
  writeJsonSync(path.join(dir, `${name}-raw.json`), data, { spaces: 2 });

  // Write minified
  writeJsonSync(path.join(dir, `${name}.json`), data);
};
