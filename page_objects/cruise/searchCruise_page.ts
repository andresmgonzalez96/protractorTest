
import { $, By, element, by, browser, ElementFinder, protractor, ElementArrayFinder, Browser } from 'protractor';


export class SearchCruisePage {

    private shipsMenu: ElementFinder;
    private cruiseOption: ElementArrayFinder;
    private cruiseContainer: ElementFinder;
    private durationMenu: ElementFinder;
    private durationOption: ElementFinder;
    private cruiseNameFiltered: ElementFinder 

    constructor() {
        this.shipsMenu = element(by.id("sfn-nav-ships"));
        this.cruiseOption = element.all(by.className("cdc-filter-button"));
        this.cruiseContainer = element(by.className("cdc-filter-cols-wrapper"));
        this.durationMenu = element(by.id("cdc-durations"));
        this.durationOption = element(by.className("cdc-filter-3-cols-layout"));
        this.cruiseNameFiltered = element(by.className("cgc-cruise-glance__secondary-text"));
    }

    get(url: string) {
        browser.waitForAngularEnabled(false);
        browser.get(url);
    }

    selectCruise(cruise: number) {
        this.shipsMenu.click();
        this.cruiseOption.get(cruise).click();
    }

    selectCruiseName(cruiseName: string) {
        this.shipsMenu.click();
        this.cruiseOption
            .filter((item: ElementFinder) =>
            item
                .findElement(by.className("cdc-filter-button"))
                .getText()
                .then((text: string) => text.includes(cruiseName)))
            .first().click();
            browser.sleep(5000);
    }

    selectDuration() {
        this.durationMenu.click();
        this.durationOption.click();
    }

    getCruiseName(name: string) {
        this.waitForLoadElement(this.cruiseNameFiltered, name);
        return this.cruiseNameFiltered.getText();
    }

    waitForLoadElement(element: ElementFinder, value: string) {
        var EC = protractor.ExpectedConditions;

        browser.driver.wait(function () {
            browser.wait(EC.textToBePresentInElement(element, value), 5000);
            return element;
        });
    }
}