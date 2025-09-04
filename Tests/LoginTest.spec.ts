import { test } from '../Fixture/baseTest';
import { LoginPage } from '../Pages/Login/keyword_login';

test.describe('Login Functionality Tests', () => {
  test('Sebagai Admin, saya dapat login menggunakan data yang valid', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginwithValidCredentials();
  });

  test('Sebagai Admin, saya tidak dapat login menggunakan data yang tidak valid', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginwithInvalidCredentials();
  });
});