import { browser, ElementFinder, ExpectedConditions } from 'protractor';

const TIMEOUT = 5000;
let message: string;

export async function waitFor(condition: Function, optMessage?: string) {
  await browser.wait(condition, TIMEOUT, optMessage);
}

export async function waitForClickable(button: ElementFinder) {
  message = 'Waiting for clickable ';

  await waitFor(ExpectedConditions.elementToBeClickable(button), message + button.locator());
}

export async function waitForVisible(elem: ElementFinder) {
  await waitFor(ExpectedConditions.visibilityOf(elem), 'Waiting for appearing ' + elem.locator());
}

export async function safeClick(button: ElementFinder) {
  await waitForClickable(button);

  button.click();
}
