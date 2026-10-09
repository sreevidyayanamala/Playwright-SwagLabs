import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { ProductsPage } from '../../src/pages/ProductsPage';

test('@smoke Swag Labs Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.navigateToLoginPage();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await productsPage.verifyProductsPage();
});