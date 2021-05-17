import { dataStore } from "./dataStore";
import { getOverallScoreForRegion } from "../src/getOverallScoreForRegion";

it("check if overall score well returnedfor a specific region", () => {
  const region = {
    id: "AL",
    dataId: 43,
    slug: "alabama",
    name: "Alabama",
    type: "state",
  };

  expect(getOverallScoreForRegion(dataStore, region)).toEqual({
    c: "red",
    id: "43-TOT",
    r: 43,
    s: 28.62,
  });
});
