import { browser, by, element } from 'protractor';

export class NavbarPO {
  navigateTo(destination) {
    return browser.get(destination);
  }

  toggle() {
    element(by.xpath('//ion-menu-button')).click();
  }

  navigateToButton(number) {
    element(by.xpath('//a[1]')).click();
  }

  getPageOneTitleText() {
    return element(by.tagName('app-login')).element(by.id('title')).getText();
  }
}
