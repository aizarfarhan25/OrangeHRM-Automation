import { BasePage } from "../../Fixture/basePage";
import { CreateNewUserElements } from "./element_createnewuser";

export class CreateNewUserPage extends BasePage {
  readonly CreateNewUserElements: CreateNewUserElements;

  constructor(page: import("@playwright/test").Page) {
    super(page);
    this.CreateNewUserElements = new CreateNewUserElements(page);
  }

  async clickAdminMenu() {
    this.log("Klik menu Admin");
    await this.CreateNewUserElements.adminmenu.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.CreateNewUserElements.adminmenu.click();
    this.log("Berhasil membuka menu Admin");
  }

  async clickAddButton() {
    this.log("Klik tombol Add");
    await this.CreateNewUserElements.addButton.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.CreateNewUserElements.addButton.click();
    this.log("Berhasil membuka form Add User");
  }

  async selectUserRole() {
    this.log("Pilih role user");
    await this.CreateNewUserElements.userRoleDropdown.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.CreateNewUserElements.userRoleDropdown.click();
    await this.CreateNewUserElements.userRoleOptions.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.CreateNewUserElements.userRoleOptions.click();
    this.log("Role user dipilih");
  }

  async selectStatus() {
    this.log("Pilih status user");
    await this.CreateNewUserElements.statusDropdown.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.CreateNewUserElements.statusDropdown.click();
    await this.CreateNewUserElements.statusOptions.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.CreateNewUserElements.statusOptions.click();
    this.log("Status user dipilih");
  }

  async inputEmployeeName(employeeName: string) {
    this.log("Input nama employee");
    await this.CreateNewUserElements.employeeNameField.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.CreateNewUserElements.employeeNameField.fill(employeeName);
    
    await this.CreateNewUserElements.employeeNameOptions.first().waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.page.waitForLoadState("networkidle");
    
    await this.CreateNewUserElements.selectEmployeeName.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.CreateNewUserElements.selectEmployeeName.click();
    
    this.log("Berhasil memilih employee");
  }

  async inputUsername(username: string) {
    this.log("Input username");
    await this.CreateNewUserElements.usernameField.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.CreateNewUserElements.usernameField.fill(username);
    this.log("Berhasil menginput username");
  }

  async inputPassword(password: string) {
    this.log("Input password");
    await this.CreateNewUserElements.passwordField.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.CreateNewUserElements.passwordField.fill(password);
    this.log("Berhasil menginput password");
  }

  async inputConfirmPassword(confirmPassword: string) {
    this.log("Input confirm password");
    await this.CreateNewUserElements.confirmPasswordField.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.CreateNewUserElements.confirmPasswordField.fill(confirmPassword);
    this.log("Berhasil menginput confirm password");
  }

  async clickSaveButton() {
    this.log("Klik tombol Save");
    await this.CreateNewUserElements.saveButton.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.CreateNewUserElements.saveButton.click();
    this.log("Berhasil menyimpan / cretea user bare");
  }

  async createNewUser(password: string) {
    const timestamp = new Date().getTime();
    const username = `aizar_test_${timestamp}`;
    
    this.log(`Membuat user baru dengan username: ${username}`);
    
    await this.inputUsername(username);
    await this.page.waitForLoadState("networkidle");
    
    await this.inputPassword(password);
    await this.page.waitForLoadState("networkidle");
    
    await this.inputConfirmPassword(password);
    await this.page.waitForLoadState("networkidle");
    
    await this.clickSaveButton();
    await this.page.waitForLoadState("networkidle");
    
    this.log(`User baru berhasil dibuat dengan username: ${username}`);
    return username;
  }
}
