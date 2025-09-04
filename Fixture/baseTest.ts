import { test as base, expect, Page } from "@playwright/test";
import testlogin from "../General/testlogin.json"
import { BasePage } from './basePage';

export const test = base.extend<{
  testlogin: typeof testlogin;
  loggedInPage: Page;
}>({
  testlogin: async ({}, use) => {
    await use(testlogin);
  },
  
  loggedInPage: async ({ page }, use) => {
    await use(page);
  },
});

export { expect };
