import { isRelevantIndicatorForRegion } from "@sdgindex/data/assessments";
import { buildIndicator, buildRegion } from "testHelpers/builders";

describe("when region is an OECD country", () => {
  it("returns true if the indicator is an OECD-only indicator", () => {
    expect(
      isRelevantIndicatorForRegion(
        buildIndicator({ isOECD: true, isGlobal: false }),
        buildRegion({ region: "OECD members" })
      )
    ).toBe(true);
  });

  it("returns false if the indicator is a global-only indicator", () => {
    expect(
      isRelevantIndicatorForRegion(
        buildIndicator({ isOECD: false, isGlobal: true }),
        buildRegion({ region: "OECD members" })
      )
    ).toBe(false);
  });

  it("returns true if the indicator is global and OECD indicator", () => {
    expect(
      isRelevantIndicatorForRegion(
        buildIndicator({ isOECD: true, isGlobal: true }),
        buildRegion({ region: "OECD members" })
      )
    ).toBe(true);
  });
});

describe("when region is not an OECD country", () => {
  it("returns false if the indicator is an OECD-only indicator", () => {
    expect(
      isRelevantIndicatorForRegion(
        buildIndicator({ isOECD: true, isGlobal: false }),
        buildRegion({ region: "MENA" })
      )
    ).toBe(false);
  });

  it("returns true if the indicator is a global-only indicator", () => {
    expect(
      isRelevantIndicatorForRegion(
        buildIndicator({ isOECD: false, isGlobal: true }),
        buildRegion({ region: "LAC" })
      )
    ).toBe(true);
  });

  it("returns true if the indicator is global and OECD indicator", () => {
    expect(
      isRelevantIndicatorForRegion(
        buildIndicator({ isOECD: true, isGlobal: true }),
        buildRegion({ region: "Asia" })
      )
    ).toBe(true);
  });
});
