const { browser } = require("protractor");

describe('Different Waits',function(){

    beforeEach(function(){
        browser.get('https://angularjs.org/');
    });

    it('await test case',async function(){
        await element(by.model('yourName')).sendKeys('Sopan');
    });
});