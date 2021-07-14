import { omit } from "lodash";
import { ensureDataIds } from "@sdgindex/data";
import {
  addMockIndicator,
  addMockIndicators,
  addMockRegion,
  addMockRegions,
} from "testHelpers/builders";

it("adds dataId property to region and assessment", () => {
  const regionWithDataId = addMockRegion();
  const assessmentWithDataId = addMockIndicator();
  addMockRegions();
  addMockIndicators();

  const region = omit(regionWithDataId, "dataId");
  const assessment = omit(assessmentWithDataId, "dataId");

  expect(region).not.toHaveProperty("dataId");
  expect(assessment).not.toHaveProperty("dataId");

  ensureDataIds({ region, assessment });

  expect(region).toHaveProperty("dataId");
  expect(assessment).toHaveProperty("dataId");
});

it("does not modify object when dataId is already present", () => {
  const region = addMockRegion();
  region.dataId = "abc";

  ensureDataIds({ region });

  expect(region).toHaveProperty("dataId", "abc");
});
