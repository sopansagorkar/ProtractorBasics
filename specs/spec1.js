const { browser, element } = require("protractor");

describe('Check Multiple Elements',function(){

it('Add function',function(){

    browser.get('https://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys('1');
    element(by.model('second')).sendKeys('2');
    element(by.id('gobutton')).click();
    expect(element(by.className('ng-binding')).getText()).toEqual('3');
    browser.driver.sleep(3000);


});

});