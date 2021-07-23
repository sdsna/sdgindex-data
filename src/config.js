import path from "path";

/**
 * @ignore
 */
export const DATA_DIR =
  typeof path?.join === "function" && path.join("./", "public", "data");

/**
 * @ignore
 */
export const DATA_PATH = "/data/";
