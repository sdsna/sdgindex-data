import { isRelevantIndicatorForRegion } from "@root/assessments";
import { buildIndicator, buildRegion } from "testHelpers/builders";

test("Returns true if the indicator is an OECD indicator for OECD region", () => {
  expect(
    isRelevantIndicatorForRegion(
      buildIndicator({ isOECD: true, isGlobal: false }),
      buildRegion({ region: "OECD members" })
    )
  ).toBe(true);
});

test("Returns false if the indicator is an OECD indicator for non OECD region", () => {
  expect(
    isRelevantIndicatorForRegion(
      buildIndicator({ isOECD: true, isGlobal: false }),
      buildRegion({ region: "MENA" })
    )
  ).toBe(false);
});

test("Returns false if the indicator is a global indicator for OECD region", () => {
  expect(
    isRelevantIndicatorForRegion(
      buildIndicator({ isOECD: false, isGlobal: true }),
      buildRegion({ region: "OECD members" })
    )
  ).toBe(false);
});

test("Returns true if the indicator is a global indicator for non OECD region", () => {
  expect(
    isRelevantIndicatorForRegion(
      buildIndicator({ isOECD: false, isGlobal: true }),
      buildRegion({ region: "MENA" })
    )
  ).toBe(true);
});

test("Returns true if the indicator is global and OECD indicator for all regions", () => {
  expect(
    isRelevantIndicatorForRegion(
      buildIndicator({ isOECD: true, isGlobal: true }),
      buildRegion({ region: "OECD members" })
    )
  ).toBe(true);
});

test("Returns true if the indicator is global and OECD indicator for all regions", () => {
  expect(
    isRelevantIndicatorForRegion(
      buildIndicator({ isOECD: true, isGlobal: true }),
      buildRegion({ region: "MENA" })
    )
  ).toBe(true);
});

test("Returns true if the indicator is neiter global nor OECD indicator for all regions", () => {
  expect(
    isRelevantIndicatorForRegion(
      buildIndicator({ isOECD: false, isGlobal: false }),
      buildRegion({ region: "OECD members" })
    )
  ).toBe(true);
});

test("Returns true if the indicator is neiter global nor OECD indicator for all regions", () => {
  expect(
    isRelevantIndicatorForRegion(
      buildIndicator({ isOECD: false, isGlobal: false }),
      buildRegion({ region: "MENA" })
    )
  ).toBe(true);
});
