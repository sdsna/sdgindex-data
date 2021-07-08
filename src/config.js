import path from "path";

export const DATA_DIR =
  typeof window === "undefined" && path.join("./", "public", "data");

export const DATA_PATH = "/data/";
