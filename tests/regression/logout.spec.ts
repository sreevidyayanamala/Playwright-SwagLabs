import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { MenuPage } from '../../src/pages/MenuPage';

test('@regression Logout Flow', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const menuPage = new MenuPage(page);

  await loginPage.navigateToLoginPage();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await menuPage.openMenu();

  await menuPage.logout();

  await expect(page).toHaveURL(
    'https://www.saucedemo.com/'
  );
});