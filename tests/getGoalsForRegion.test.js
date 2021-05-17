import { dataStore } from "./dataStore";
import { getIndicators } from "@root";

it("check if get inndicators return all indicators", () => {
  expect(getIndicators(dataStore).length).toEqual(79);
});
