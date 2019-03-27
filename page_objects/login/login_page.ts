
import { $, By, element, by, browser, protractor, ElementFinder } from 'protractor';



export class LoginPage {

    private userNameTexbox: ElementFinder;
    private passwordTextbox: ElementFinder;
    private loginButton: ElementFinder;
    private loginMessageError: ElementFinder;
    
    constructor() {
        this.userNameTexbox = element(by.name("username"));
        this.passwordTextbox = element(by.name("password"));
        this.loginButton = element(by.className("lrc-submit-button"));
        this.loginMessageError = element(by.className("errf-item"));
    }

    get(url: string) {
        browser.waitForAngularEnabled(false);
        browser.get(url);
    }

    writePass(pass: string) {
        this.passwordTextbox.sendKeys(pass);
    }

    writeUsername(username: string) {
        this.userNameTexbox.sendKeys(username);
    }

    clickLogin() {
        this.loginButton.click();

    }

    getLoginMessageError() {
        
        this.waitForLoadElement(this.loginMessageError);
        return this.loginMessageError;
    }

    waitForLoadElement(element: ElementFinder) {
        var EC = protractor.ExpectedConditions;

        browser.driver.wait(function () {
            browser.wait(EC.visibilityOf(element), 5000);
            return element;
        });
    }
}