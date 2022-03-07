exports.config = {

    seleniumAddress: 'http://192.168.29.176:4444/wd/hub',
    specs: ['specs/testsWithWait.js'],
    capabilities: {
        browserName: 'chrome'
    }
};