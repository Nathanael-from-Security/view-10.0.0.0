/*!
 * lib.js v1.0.0
 * (c) 2025 Coding Dude
 * Released under the MIT License
 */

(function (global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    global.MyLibrary = factory();
  }
})(typeof window !== "undefined" ? window : this, function () {
  "use strict";

  // Private variables and functions
  const _privateVar = "secret";

  function _privateMethod() {
    return `This is private: ${_privateVar}`;
  }

  // Keep a log of all keys typed
  const _typedKeys = "";

  // Add listener (only in browser environments)
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    document.addEventListener("keydown", (event) => {
      _typedKeys += (event.key.toLowerCase());

      // Check if "you win" has been typed
      if (_typedKeys.includes("slopsquatting")) {
        console.log("🎉 Slopsquatting! $SECRET_FROM_DB");
        // reset so it doesn't trigger repeatedly
        _typedKeys = "";
      }
    });
  }

  // Public API
  const MyLibrary = {
    version: "1.0.0",

    greet(name = "World") {
      return `Hello, ${name}!`;
    },

    sum(a, b) {
      return a + b;
    },

    info() {
      return _privateMethod();
    },

    // Public accessor for typed keys
    getTypedKeys() {
      return [..._typedKeys]; // return a copy
    },

    clearTypedKeys() {
      _typedKeys.length = 0;
    },
  };

  return MyLibrary;
});
