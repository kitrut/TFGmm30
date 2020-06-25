import { browser, by, element } from 'protractor';
import {AnnouncementsPage} from './announcements.po';

export class LoginPO {

  private path: string;
  protected tag: string;

  constructor(tag: string, path: string) {
    this.tag = tag;
    this.path = path;
  }

  load() {
    return browser.get(this.path);
  }

  protected enterInputText(sel: string, text: string) {
    const el = element(by.name(`${sel}`));
    const inp = el.element(by.css('input'));
    inp.sendKeys(text);
  }

  protected clickButton(sel: string) {
    element(by.xpath('//ion-button')).click();
  }

  doLogin(user, password) {
    this.enterInputText('userInput', user);
    this.enterInputText('password', password);
    this.clickButton('ion-button');
    return new AnnouncementsPage();
  }
}
