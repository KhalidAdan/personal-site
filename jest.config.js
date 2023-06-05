const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/coverage/**",
    "!**/blogs/**",
    "!**.next/**",
    "!**.contentlayer/**",
    "!**.react-email/**",
    "!**/types/**",
    "!**/jest.config.js",
    "!**/jest.setup.js",
    "!**/next-env.d.ts",
    "!**/tailwind.config.js",
    "!contentlayer.config.ts",
    "!postcss.config.js",
    "!env.ts",
  ],
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageDirectory: "<rootDir>/coverage",
  maxWorkers: "50%",
  // coveragePathIgnorePatterns: fs // remove stuff from git ignore
  //   .readFileSync(path.resolve(__dirname, ".gitignore"), "utf8")
  //   .split("\n")
  //   .filter((line) => !!line.trim() && !line.startsWith("#"))
  //   .map((line) => `/${line.replace(/\*/g, "**")}/`),
};

module.exports = createJestConfig(customJestConfig);
