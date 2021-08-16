import { addRegion } from "@sdgindex/data/parse";
import { store } from "@sdgindex/data";

// Clear store before each test
beforeEach(() => {
  Object.keys(store).map((key) => delete store[key]);
});

it("adds the region to the store", () => {
  addRegion({
    id: "FIN",
    name: "Finland",
    type: "country",
  });

  expect(store.regions[0]).toMatchObject({
    id: "FIN",
    dataId: 1,
    slug: "finland",
    name: "Finland",
    type: "country",
  });
});

describe("when passing custom parameters", () => {
  it("can overwrite the default slug", () => {
    addRegion({
      id: "GER",
      name: "Germany",
      type: "country",
      slug: "my-custom-slug",
    });
    expect(store.regions[0]).toHaveProperty("slug", "my-custom-slug");
  });

  it("adds additional properties", () => {
    addRegion({
      id: "CO",
      name: "Colorado",
      type: "state",
      population: 5_759_000,
    });
    expect(store.regions[0]).toHaveProperty("population", 5_759_000);
  });
});

describe("when adding 10 regions", () => {
  it("sets a unique dataId for each one", () => {
    for (let i = 0; i < 10; i++) {
      addRegion({
        id: "FRA",
        name: "France",
        type: "country",
      });
    }

    const dataIds = store.regions.map((region) => region.dataId);
    expect(Array.from(new Set(dataIds))).toHaveLength(10);
  });
});
