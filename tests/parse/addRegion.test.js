import { addRegion } from "@sdgindex/data/parse";
import { buildRegion } from "testHelpers/builders";

it("add region to the dataStore", () => {
  const dataStore = { regions: [] };
  let name = "Finland";
  addRegion(dataStore, {
    name,
    id: "FIN",
    type: "country",
  });

  expect(dataStore.regions[0]).toEqual(
    buildRegion({
      id: "FIN",
      dataId: 1,
      slug: "finland",
      name: "Finland",
      type: "country",
    })
  );

  name = "Sweden";
  addRegion(dataStore, {
    name,
    id: "SWE",
    type: "country",
  });

  expect(dataStore.regions[1]).toEqual(
    buildRegion({
      id: "SWE",
      dataId: 2,
      slug: "sweden",
      name: "Sweden",
      type: "country",
    })
  );
});
