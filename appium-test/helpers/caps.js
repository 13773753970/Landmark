const iosCaps = {
  platformName: 'iOS',
  automationName: 'XCUITest',
  deviceName: 'iPhone 12',
  platformVersion: '14.5',
  app: '/Users/zhoupeng/Library/Developer/Xcode/DerivedData/Landmarks-bktidhwrgulobactpfiuabiiuglo/Build/Products/Debug-iphonesimulator/Landmarks.app' // Will be added in tests
};

const serverConfig = {
  path: '/wd/hub',
  host: 'localhost',
  port: 4723,
  logLevel: 'info'
};

const iosOptions = Object.assign(
  {
    capabilities: iosCaps
  },
  serverConfig
);

module.exports = {
  iosOptions,
};
