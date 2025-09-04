import { test } from "../Fixture/baseTest";
import { LoginPage } from "../Pages/Login/keyword_login";
import { CreateNewUserPage } from "../Pages/CreateNewUser/keyword_createnewuser";

test.describe("User Management Tests", () => {
  // Test untuk membuat user baru
  test("Sebagai Admin, saya dapat membuat user baru", async ({ page }) => {
    // 1. Login
    const loginPage = new LoginPage(page);
    await loginPage.loginwithValidCredentials();

    // 2. Buka halaman Admin
    const createNewUserPage = new CreateNewUserPage(page);
    await createNewUserPage.clickAdminMenu();
    await page.waitForLoadState("networkidle");
    console.log("✅ Halaman Admin berhasil diakses");

    // 3. Klik tombol Add
    await createNewUserPage.clickAddButton();
    await page.waitForLoadState("networkidle");
    console.log("✅ Tombol Add berhasil diklik");

    // 4. Pilih role user
    await createNewUserPage.selectUserRole();
    await page.waitForLoadState("networkidle");
    console.log("✅ Role user dipilih");

    // 5. Pilih status user
    await createNewUserPage.selectStatus();
    await page.waitForLoadState("networkidle");
    console.log("✅ Status user dipilih");

    // 6. Input employee name
    await createNewUserPage.inputEmployeeName("Orange");
    await page.waitForLoadState("networkidle");
    console.log("✅ Employee name 'Orange Test' diinput dan dipilih dari dropdown");
    
    // 7. Input username dengan format aizar_test_(timestamp) supaya tidak sama
    const createdUsername = await createNewUserPage.createNewUser('Password123');
    await page.waitForLoadState("networkidle");
    console.log(`✅ User baru berhasil dibuat dengan username: ${createdUsername}`);
    
  });
});
