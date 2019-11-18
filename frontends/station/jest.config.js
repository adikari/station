// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/plugins/**/*.js', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'text-summary', 'lcov'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./node_modules/@testing-library/jest-dom/extend-expect.js'],
  watchman: true,
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90
    }
  }
};
