module.exports = {
  presets: ["@babel/preset-env"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/public/",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@interfaces/(.*)$": "<rootDir>/src/interfaces/$1",
  },
};
