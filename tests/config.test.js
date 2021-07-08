const { window } = global;

beforeAll(() => {
  // Simulate Node.js environment
  delete global.window;
});

afterAll(() => {
  global.window = window;
});

it("defines DATA_DIR and DATA_PATH", () => {
  const { config } = require("@sdgindex/data");

  expect(config).toMatchObject({
    DATA_DIR: expect.stringContaining("data"),
    DATA_PATH: "/data/",
  });
});
