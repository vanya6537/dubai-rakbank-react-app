// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
beforeAll(() => {
  // bypass IntersectionObserver because of usage of framer-motion.
  // Trying to use the IntersectionObserver API in an environment where it is not available. This is common in server-side rendering environments
  // or in older browsers that do not support IntersectionObserver

  // @ts-ignore
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}

    observe() {
      return null;
    }

    unobserve() {
      return null;
    }

    disconnect() {
      return null;
    }
  };
});
