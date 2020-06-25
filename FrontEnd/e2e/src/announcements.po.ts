import { browser, by, element } from 'protractor';

export class AnnouncementsPage {

  getPageOneTitleText() {
    return element(by.tagName('app-announcements')).element(by.xpath('//ion-title')).getText();
  }
}
