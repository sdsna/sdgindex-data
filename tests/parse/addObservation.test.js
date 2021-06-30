import { addObservation } from "@sdgindex/data/parse";

it("add observation to the dataStore", () => {
  const dataStore = { observations: [] };
  const region = { dataId: 1 };
  const assessment = { dataId: 4 };
  addObservation(dataStore, {
    region,
    assessment,
    value: 2.5,
    color: "green",
    arrow: "↑",
    year: 2018,
  });
  console.log(dataStore.observations);
  expect(dataStore.observations[0]).toEqual({
    id: "1-4",
    v: 2.5,
    c: "green",
    a: "↑",
    y: 2018,
  });
});
