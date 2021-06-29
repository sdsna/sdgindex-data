import { addObservation } from "@sdgindex/data/parse";

it("add observation to the dataStore", () => {
  const dataStore = { observations: [] };
  addObservation(dataStore, {
    id: "1-4",
    value: 2.5,
    color: "green",
    arrow: "↑",
    year: 2018,
  });
  expect(dataStore.observations[0]).toEqual({
    id: "1-4",
    v: 2.5,
    c: "green",
    a: "↑",
    y: 2018,
  });
});
