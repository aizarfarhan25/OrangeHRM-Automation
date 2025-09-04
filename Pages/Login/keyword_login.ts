import { BasePage } from "../../Fixture/basePage";
import data from "../../General/data";
import { LoginElements } from "./element_login";

export class LoginPage extends BasePage {
  readonly LoginElements: LoginElements;

  constructor(page: import("@playwright/test").Page) {
    super(page);
    this.LoginElements = new LoginElements(page);
  }

  async goto() {
    await this.gotoBase();
  }

  async loginwithValidCredentials(): Promise<void> {
    this.log("Melakukan login dengan user valid");
    await this.goto();
    
    // Tunggu dan isi username
    await this.LoginElements.userName.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.LoginElements.userName.fill(data.LoginDataTest.validUser.username);
    this.log(`Username diisi: ${data.LoginDataTest.validUser.username}`);
    
    // Tunggu dan isi password
    await this.LoginElements.password.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.LoginElements.password.fill(
      data.LoginDataTest.validUser.password
    );
    this.log(`Password diisi: ${data.LoginDataTest.validUser.password}`);
    
    // Klik tombol login
    await this.LoginElements.loginButton.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.LoginElements.loginButton.click();
    this.log(`Tombol login diklik`);
    this.log("Login berhasil");
  }

  async loginwithInvalidCredentials(): Promise<void> {
    this.log("Melakukan login dengan user invalid");
    await this.goto();
    
    // Tunggu dan isi username
    await this.LoginElements.userName.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.LoginElements.userName.fill(
      data.LoginDataTest.invalidUser.username
    );
    this.log(`Username diisi: ${data.LoginDataTest.invalidUser.username}`);
    
    // Tunggu dan isi password
    await this.LoginElements.password.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.LoginElements.password.fill(
      data.LoginDataTest.invalidUser.password
    );
    this.log(`Password diisi: ${data.LoginDataTest.invalidUser.password}`);
    
    // Klik tombol login
    await this.LoginElements.loginButton.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.LoginElements.loginButton.click();
    this.log(`Tombol login diklik`);
    await this.LoginElements.loginButton.waitFor({ 
      state: "visible",
      timeout: 10000,
    });
    
    this.log("Login tidak berhasil dan tetap berada di halaman login");
  }
}
