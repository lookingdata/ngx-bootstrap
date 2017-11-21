import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import { LandingPo } from '../pages/landing.po';
import { safeClick, waitForVisible } from '../shared/helpers/wd-helper';
import { GettingStartedPo } from '../pages/gettingStarted.po';
import { BasePagePo } from '../shared/pages/basePage.po';

defineSupportCode(({Given, When, Then}) => {
  const basePage: BasePagePo = new BasePagePo();
  const landingPage: LandingPo = new LandingPo();
  const gettingStartedPage: GettingStartedPo = new GettingStartedPo();

  Given(/^I am on the landing page$/, async () => {
   await browser.get(landingPage.pageUrl);
  });

  When(/^I click on Get Started Button$/, async () => {
    await safeClick(landingPage.getStartedBtn);
  });

  Then(/^I am redirected to Getting Started page$/, async () => {
    await waitForVisible(gettingStartedPage.angularLogo);
    await basePage.assertCurrentUrlEnds(gettingStartedPage.pageUrl);
  });

  Then(/^I see Angular icon$/, async () => {
    await basePage.assertElementDisplayed(gettingStartedPage.angularLogo);
  });
});
