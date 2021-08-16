module.exports = {
  resetMocks: true,
  moduleNameMapper: {
    "^@sdgindex/data(.*)$": "<rootDir>$1",
    "^mock:@sdgindex/data(.*)$": "<rootDir>/cjs$1",
    "^private:@sdgindex/data(.*)$": "<rootDir>/cjs$1",
    "^testHelpers(.*)$": "<rootDir>/tests/helpers$1",
  },
};
