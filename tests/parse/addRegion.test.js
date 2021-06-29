import { addRegion } from "@sdgindex/data/parse";
import { buildRegion } from "testHelpers/builders";

it("add region to the dataStore", () => {
  const dataStore = { regions: [] };
  addRegion(dataStore, {
    id: "AUT",
    dataId: 6,
    slug: "austria",
    name: "Austria",
  });
  expect(dataStore.regions[0]).toEqual(
    buildRegion({
      id: "AUT",
      dataId: 6,
      slug: "austria",
      name: "Austria",
      type: "country",
    })
  );
});
