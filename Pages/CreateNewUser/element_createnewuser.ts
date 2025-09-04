import { Locator, Page } from "@playwright/test";

export class CreateNewUserElements {
  readonly adminmenu: Locator
  readonly addButton: Locator
  readonly userRoleDropdown: Locator
  readonly userRoleOptions: Locator
  readonly statusDropdown: Locator
  readonly statusOptions: Locator
  readonly employeeNameField: Locator
  readonly employeeNameOptions: Locator
  readonly selectEmployeeName: Locator
  readonly usernameField: Locator
  readonly passwordField: Locator
  readonly confirmPasswordField: Locator
  readonly saveButton: Locator

  constructor(private readonly page: Page) {
    this.adminmenu = page.locator("(//a[@class='oxd-main-menu-item'])[1]");
    this.addButton = page.locator("(//button[contains(@class,'oxd-button oxd-button--medium')])[3]");
    this.userRoleDropdown = page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[1]");
    this.userRoleOptions = page.locator(".oxd-select-dropdown .oxd-select-option").filter({ hasText: "Admin" });
    this.statusDropdown = page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[2]");
    this.statusOptions = page.locator(".oxd-select-dropdown .oxd-select-option").filter({ hasText: "Enabled" });
    this.employeeNameField = page.locator("//input[@placeholder='Type for hints...']");
    this.employeeNameOptions = page.locator(".oxd-autocomplete-dropdown .oxd-autocomplete-option");
    this.selectEmployeeName = page.locator(".oxd-autocomplete-dropdown .oxd-autocomplete-option").filter({ hasText: "Orange Test" });
    this.usernameField = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]");
    this.passwordField = page.locator("(//input[@type='password'])[1]");
    this.confirmPasswordField = page.locator("(//input[@type='password'])[2]");
    this.saveButton = page.locator("//button[@type='submit']");
  }
}