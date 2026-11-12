import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { ProductsPage } from '../../src/pages/ProductsPage';
import users from '../../src/testData/users.json';

test('@smoke Swag Labs Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.navigateToLoginPage();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await productsPage.verifyProductsPage();
});