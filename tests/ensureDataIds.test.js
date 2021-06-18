import { omit } from "lodash";
import { ensureDataIds } from "@root";
import {
  buildIndicator,
  buildIndicators,
  buildRegion,
  buildRegions,
} from "testHelpers/builders";

it("adds dataId property to region and assessment", () => {
  const regionWithDataId = buildRegion();
  const assessmentWithDataId = buildIndicator();
  const dataStore = {
    regions: [regionWithDataId, ...buildRegions()],
    assessments: [assessmentWithDataId, buildIndicators()],
  };

  const region = omit(regionWithDataId, "dataId");
  const assessment = omit(assessmentWithDataId, "dataId");

  expect(region).not.toHaveProperty("dataId");
  expect(assessment).not.toHaveProperty("dataId");

  ensureDataIds({ dataStore, region, assessment });

  expect(region).toHaveProperty("dataId");
  expect(assessment).toHaveProperty("dataId");
});

it("does not modify object when dataId is already present", () => {
  const region = buildRegion({ dataId: "abc" });

  ensureDataIds({ dataStore: {}, region });

  expect(region).toHaveProperty("dataId", "abc");
});
