import { store } from "@sdgindex/data";
jest.mock("mock:@sdgindex/data/store");

// Clear mock store before each test
beforeEach(() => {
  Object.keys(store).map((key) => delete store[key]);
});

// Mock store with the given assessments, regions, observations, etc...
const mockStore = (params) => Object.assign(store, params);

export default mockStore;
