import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { MenuPage } from '../../src/pages/MenuPage';
import users from '../../src/testData/users.json';

test('@regression Logout Flow', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const menuPage = new MenuPage(page);

  await loginPage.navigateToLoginPage();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await menuPage.openMenu();

  await menuPage.logout();

  await expect(page).toHaveURL(
    'https://www.saucedemo.com/'
  );
});