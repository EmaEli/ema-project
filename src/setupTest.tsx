// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom';
import './i18n';

// Mock the api
// jest.mock('api');

// Mock the amplify library, for test performance purposes
// jest.mock('@aws-amplify/api', () => ({
//   __esModule: true,
//   API: {
//     configure: jest.fn(),
//     get: jest.fn(),
//     post: jest.fn(),
//     put: jest.fn(),
//     patch: jest.fn(),
//     del: jest.fn(),
//     cancel: jest.fn(),
//     isCancel: jest.fn(),
//   },
// }));

// Disable the warning logs
console.warn = () => undefined;

// Fail test if console.error is called
// this way tests will fail on messages printed to error logs
let isConsoleError = false;

beforeEach(() => {
  isConsoleError = false;
  const originalError = global.console.error;
  jest.spyOn(global.console, 'error').mockImplementation((...args) => {
    isConsoleError = true;
    originalError(...args);
  });
});

afterEach(() => {
  if (isConsoleError) {
    throw new Error('Console errors are not allowed');
  }
});
