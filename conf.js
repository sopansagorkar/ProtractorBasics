exports.config = {

    seleniumAddress: 'http://192.168.29.176:4444/wd/hub',
    specs: ['specs/spec2.js', 'specs/spec1.js', 'specs/spec.js'],
    capabilities: {
        browserName: 'chrome'
    }
};