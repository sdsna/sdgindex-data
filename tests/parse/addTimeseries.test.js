import { addTimeseries } from "@sdgindex/data/parse";
import { addMockIndicator, addMockRegion } from "testHelpers/storeMocks";
import { store } from "@sdgindex/data";

// Clear store before each test
beforeEach(() => {
  Object.keys(store).map((key) => delete store[key]);
});

it("add timeseries to the store", () => {
  const region = addMockRegion();
  region.dataId = 1;
  const indicator = addMockIndicator();
  indicator.dataId = 35;
  addTimeseries({
    region: region,
    assessment: indicator,
    dataPoints: [
      { year: 2000, value: 1 },
      { year: 2001, value: 2 },
      { year: 2002, value: 3 },
      { year: 2003, value: 4 },
      { year: 2004, value: 5 },
      { year: 2005, value: 6 },
      { year: 2006, value: 7 },
      { year: 2007, value: 8 },
      { year: 2008, value: 9 },
      { year: 2009, value: 10 },
      { year: 2010, value: 9 },
      { year: 2011, value: 8 },
      { year: 2012, value: 7 },
      { year: 2013, value: 6 },
      { year: 2014, value: 5 },
      { year: 2015, value: 4 },
      { year: 2016, value: 3 },
      { year: 2017, value: 2 },
      { year: 2018, value: 1 },
      { year: 2019, value: 0 },
      { year: 2020, value: -1 },
      { year: 2021, value: -2 },
    ],
  });

  expect(store.timeseries["1-35"]).toEqual([
    2000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2,
  ]);
});

it("rounds values to two decimals", () => {
  addTimeseries({
    region: addMockRegion({ dataId: 5 }),
    assessment: addMockIndicator({ dataId: 37 }),
    dataPoints: [{ year: 2004, value: 115.2365 }],
  });

  expect(store.timeseries["5-37"]).toMatchObject([2004, 115.24]);
});

it("can add timeseries after 2021", () => {
  addTimeseries({
    region: addMockRegion({ dataId: 5 }),
    assessment: addMockIndicator({ dataId: 37 }),
    dataPoints: [
      { year: 2025, value: 1 },
      { year: 2027, value: 3 },
    ],
  });

  expect(store.timeseries["5-37"]).toMatchObject([2025, 1, null, 3]);
});

it("it ignores trailing null values", () => {
  addTimeseries({
    region: addMockRegion({ dataId: 5 }),
    assessment: addMockIndicator({ dataId: 37 }),
    dataPoints: [
      { year: 2005, value: 13 },
      { year: 2012, value: null },
    ],
  });

  expect(store.timeseries["5-37"]).toMatchObject([2005, 13]);
});

describe("when adding timeseries without data points", () => {
  it("does not add timeseries", () => {
    addTimeseries({
      region: addMockRegion(),
      assessment: addMockIndicator(),
      dataPoints: [
        {
          year: 2005,
          value: null,
        },
      ],
    });

    expect(store).not.toHaveProperty("timeseries");
  });
});
