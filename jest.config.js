module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"],
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
  transform: {
    ".(js|jsx|ts|tsx)": "ts-jest"
  }
};
