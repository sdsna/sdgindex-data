import { addRegion } from "@sdgindex/data/parse";

let dataStore = {};
beforeEach(() => {
  // Clear dataStore
  dataStore = {};
});

it("adds the region to the dataStore", () => {
  addRegion(dataStore, {
    id: "FIN",
    name: "Finland",
    type: "country",
  });

  expect(dataStore.regions[0]).toMatchObject({
    id: "FIN",
    dataId: 1,
    slug: "finland",
    name: "Finland",
    type: "country",
  });
});

describe("when passing custom parameters", () => {
  it("can overwrite the default slug", () => {
    addRegion(dataStore, {
      id: "GER",
      name: "Germany",
      type: "country",
      slug: "my-custom-slug",
    });
    expect(dataStore.regions[0]).toHaveProperty("slug", "my-custom-slug");
  });

  it("adds additional properties", () => {
    addRegion(dataStore, {
      id: "CO",
      name: "Colorado",
      type: "state",
      population: 5_759_000,
    });
    expect(dataStore.regions[0]).toHaveProperty("population", 5_759_000);
  });
});

describe("when adding 10 regions", () => {
  it("it sets a unique dataId for each one", () => {
    for (let i = 0; i < 10; i++) {
      addRegion(dataStore, {
        id: "FRA",
        name: "France",
        type: "country",
      });
    }

    const dataIds = dataStore.regions.map((region) => region.dataId);
    expect(Array.from(new Set(dataIds))).toHaveLength(10);
  });
});
