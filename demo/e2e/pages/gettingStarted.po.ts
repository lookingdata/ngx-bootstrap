import { $, ElementFinder } from 'protractor';

export class GettingStartedPo {
  pageUrl = 'getting-started';
  angularLogo: ElementFinder = $('[alt*="angular logo"]');
}
