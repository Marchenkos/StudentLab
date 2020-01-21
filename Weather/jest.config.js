module.exports = {
    verbose: true,
    setupFilesAfterEnv: ["jest-enzyme"],
    testEnvironment: "enzyme",
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFiles: ["./setupTests.js"],
    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/src/__mocks__/styleMock.js",
        "^.+\\.(css|less)$": "identity-obj-proxy"
    }
};
