import { getRegions } from "@sdgindex/data";
import { addMockRegions } from "testHelpers/builders";

it("returns all regions", () => {
  const regions = addMockRegions();

  expect(getRegions()).toEqual(regions);
});
