import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';

test('@regression Checkout Flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigateToLoginPage();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.addBackpackToCart();

  await inventoryPage.openCart();

  await checkoutPage.clickCheckout();

  await checkoutPage.enterCheckoutDetails(
    'Sreevidya',
    'Yanamala',
    '560037'
  );

  await checkoutPage.continueCheckout();

  await checkoutPage.finishCheckout();

  await checkoutPage.verifyOrderSuccess();
});