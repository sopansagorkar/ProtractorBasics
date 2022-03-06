const { browser, element } = require("protractor");

describe('Multiple scenarios',function(){
    var firstNumber=element(by.model('first'));
    var secondNumber=element(by.model('second'));
    var goButton=element(by.id('gobutton'));
    var result=element(by.className('ng-binding'));

    beforeEach(function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
    });

    it('verify Title',function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    
    it('should add two numbers',function(){
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        goButton.click();
        expect(result.getText()).toEqual('3');
    });
});