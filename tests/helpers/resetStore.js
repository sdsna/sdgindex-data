import { store } from "@sdgindex/data";

// Resets the store to its default state
const resetStore = () => {
  Object.keys(store).map((key) => delete store[key]);
};

export default resetStore;
