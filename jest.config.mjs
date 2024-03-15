export default {
  coverageThreshold: {
    // Here you can setup your accepted minimum threshold of the codebase coverage
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  coveragePathIgnorePatterns: [
    'src/index.tsx',
    'src/config.ts',
    'src/models/*',
    'src/TestTools.tsx',
    'src/reportWebVitals.ts',
  ],
};
