import { $, ElementFinder } from 'protractor';


export class LandingPo {
  pageUrl = '';
  getStartedBtn: ElementFinder = $('.btn-primary');
  githubBtn: ElementFinder = $('.btn-outline-secondary');
}
