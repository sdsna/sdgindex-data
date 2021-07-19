import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

import { loadData, isDataLoaded, useDataStore } from "@sdgindex/data";
jest.mock("mock:@sdgindex/data/loadData");
jest.mock("mock:@sdgindex/data/isDataLoaded");

// Call finishLoadingData() to resolve loadData() promise and simulate that
// data is now loaded
let finishLoadingData = null;

beforeEach(() => {
  isDataLoaded.mockImplementation(() => false);
  loadData.mockImplementation(
    () =>
      new Promise((resolve) => {
        finishLoadingData = resolve;
      })
  );
});

const Component = () => {
  const { isLoaded } = useDataStore();

  if (!isLoaded) return "Loading";

  return "Ready";
};

it("renders loading while the data is loading", () => {
  render(<Component />);
  expect(screen.getByText("Loading")).toBeInTheDocument();
});

it("renders ready when the data has loaded", async () => {
  render(<Component />);
  finishLoadingData();
  await waitFor(() => expect(screen.getByText("Ready")).toBeInTheDocument());
});

describe("when the data is already loaded", () => {
  beforeEach(() => {
    isDataLoaded.mockImplementation(() => true);
  });

  it("renders ready right away", () => {
    render(<Component />);
    expect(screen.getByText("Ready")).toBeInTheDocument();
  });
});
