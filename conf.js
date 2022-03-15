exports.config = {
    directConnect: true,
    seleniumAddress: 'http://192.168.29.176:4444/wd/hub',
    specs: ['specs/spec2.js'],
    capabilities: {
        browserName: 'chrome'
    }
};