import { addTimeseries } from "@sdgindex/data/parse";

it("add timeseries to the dataStore", () => {
  const dataStore = { timeseries: [] };
  const region = { dataId: 1 };
  const assessment = { dataId: "TOT" };
  const values = [
    { year: 2000, value: 83.45 },
    { year: 2001, value: 83.37 },
    { year: 2002, value: 83.6 },
    { year: 2003, value: 83.28 },
    { year: 2004, value: 83.39 },
    { year: 2005, value: 84 },
    { year: 2006, value: 83.5 },
    { year: 2007, value: 83.57 },
    { year: 2008, value: 83.89 },
    { year: 2009, value: 85.36 },
    { year: 2010, value: 85.3 },
    { year: 2011, value: 85.55 },
    { year: 2012, value: 85.9 },
    { year: 2013, value: 85.91 },
    { year: 2014, value: 86.04 },
    { year: 2015, value: 85.92 },
    { year: 2016, value: 85.79 },
    { year: 2017, value: 85.85 },
    { year: 2018, value: 85.53 },
    { year: 2019, value: 85.79 },
    { year: 2020, value: 85.89 },
    { year: 2021, value: 85.89 },
  ];

  addTimeseries(dataStore, {
    region,
    assessment,
    values,
  });

  expect(dataStore.timeseries[0]).toEqual({
    id: "1-TOT",
    v: [
      83.45, 83.37, 83.6, 83.28, 83.39, 84, 83.5, 83.57, 83.89, 85.36, 85.3,
      85.55, 85.9, 85.91, 86.04, 85.92, 85.79, 85.85, 85.53, 85.79, 85.89,
      85.89,
    ],
  });
});
