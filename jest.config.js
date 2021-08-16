module.exports = {
  resetMocks: true,
  moduleNameMapper: {
    "^@sdgindex/data(.*)$": "<rootDir>/src$1",
    "^mock:@sdgindex/data(.*)$": "<rootDir>/src$1",
    "^private:@sdgindex/data(.*)$": "<rootDir>/src$1",
    "^testHelpers(.*)$": "<rootDir>/tests/helpers$1",
  },
};
