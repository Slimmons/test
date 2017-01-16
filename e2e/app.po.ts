import { browser, element, by } from 'protractor';

export class ConcertGiraffePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cg-root h1')).getText();
  }
}
