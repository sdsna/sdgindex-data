import path from "path";

/**
 * Get the data directory path based on the context.
 * @param {string} [context] - The context for data storage (e.g., 'benin' for Benin-specific data)
 * @return {string} The data directory path
 * @ignore
 */
export const getDataDir = (context) => {
  if (typeof path?.join !== "function") return null;

  if (context === "benin") {
    return path.join("./", "public", "data", "profils");
  }

  // Default case for backward compatibility
  return path.join("./", "public", "data");
};

/**
 * @ignore
 */
export const DATA_DIR = getDataDir();

/**
 * @ignore
 */
export const DATA_PATH = "/data/";
