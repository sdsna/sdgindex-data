/**
 * @jest-environment node
 */

it("defines DATA_DIR and DATA_PATH", () => {
  const { config } = require("@sdgindex/data");

  expect(config).toMatchObject({
    DATA_DIR: expect.stringContaining("data"),
    DATA_PATH: "/data/",
  });
});

it("getDataDir returns correct path for different contexts", () => {
  const { config } = require("@sdgindex/data");

  // Test default case
  const defaultPath = config.getDataDir();
  expect(defaultPath).toContain("public");
  expect(defaultPath).toContain("data");
  expect(defaultPath).not.toContain("profils");

  // Test benin context
  const beninPath = config.getDataDir("benin");
  expect(beninPath).toContain("public");
  expect(beninPath).toContain("data");
  expect(beninPath).toContain("profils");

  // Test unknown context (should default)
  const unknownPath = config.getDataDir("unknown");
  expect(unknownPath).toEqual(defaultPath);
});
