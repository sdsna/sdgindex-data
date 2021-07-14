import { isRelevantIndicatorForRegion } from "@sdgindex/data/assessments";
import { addMockIndicator, addMockRegion } from "testHelpers/builders";

describe("when region is an OECD country", () => {
  it("returns true if the indicator is an OECD-only indicator", () => {
    expect(
      isRelevantIndicatorForRegion(
        addMockIndicator({ isOECD: true, isGlobal: false }),
        addMockRegion({ region: "OECD members" })
      )
    ).toBe(true);
  });

  it("returns false if the indicator is a global-only indicator", () => {
    expect(
      isRelevantIndicatorForRegion(
        addMockIndicator({ isOECD: false, isGlobal: true }),
        addMockRegion({ region: "OECD members" })
      )
    ).toBe(false);
  });

  it("returns true if the indicator is global and OECD indicator", () => {
    expect(
      isRelevantIndicatorForRegion(
        addMockIndicator({ isOECD: true, isGlobal: true }),
        addMockRegion({ region: "OECD members" })
      )
    ).toBe(true);
  });
});

describe("when region is not an OECD country", () => {
  it("returns false if the indicator is an OECD-only indicator", () => {
    expect(
      isRelevantIndicatorForRegion(
        addMockIndicator({ isOECD: true, isGlobal: false }),
        addMockRegion({ region: "MENA" })
      )
    ).toBe(false);
  });

  it("returns true if the indicator is a global-only indicator", () => {
    expect(
      isRelevantIndicatorForRegion(
        addMockIndicator({ isOECD: false, isGlobal: true }),
        addMockRegion({ region: "LAC" })
      )
    ).toBe(true);
  });

  it("returns true if the indicator is global and OECD indicator", () => {
    expect(
      isRelevantIndicatorForRegion(
        addMockIndicator({ isOECD: true, isGlobal: true }),
        addMockRegion({ region: "Asia" })
      )
    ).toBe(true);
  });
});
