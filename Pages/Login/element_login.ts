import { Locator, Page } from "@playwright/test";

export class LoginElements {
  readonly username: Locator
  readonly password: Locator
  readonly loginButton: Locator

    constructor(private readonly page: Page) {
    this.username = page.locator("//input[@placeholder='Username']");
    this.password = page.locator("//input[@placeholder='Password']");
    this.loginButton = page.locator("//button[@type='submit']");
  }

}