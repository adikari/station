// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  testEnvironment: 'node',
  watchman: true,
  testMatch: ['**/*.test.js', '!**/*.integ.test.js'],

  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'text-summary', 'lcov'],
  collectCoverage: false,
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90
    }
  }
};
