import { test } from '@playwright/test';

import { LoginPage }
from '../../src/pages/LoginPage';

import { InventoryPage }
from '../../src/pages/InventoryPage';

import { CartPage }
from '../../src/pages/CartPage';

test('@regression Add product to cart',
async ({ page }) => {

  const loginPage = new LoginPage(page);

  const inventoryPage =
    new InventoryPage(page);

  const cartPage =
    new CartPage(page);

  await loginPage.navigateToLoginPage();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.addBackpackToCart();

  await inventoryPage.openCart();

  await cartPage.verifyCartPage();
});