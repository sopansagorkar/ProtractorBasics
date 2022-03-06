const { browser, element } = require("protractor")

describe('Enter name Feature',function(){

    it('should enter name as Sopan',function(){

        //driver.get() in Java
        browser.get('https://angularjs.org/');

        //driver.findElement(By.locator).sendKeys() in Java
        element(by.model('yourName')).sendKeys('Sopan');

        //Declaring Variable
        var text=element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));

        //Asserting Text
        expect(text.getText()).toEqual('Hello Sopan!');


    });
});