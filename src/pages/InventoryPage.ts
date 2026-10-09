import { Page } from '@playwright/test';

export class InventoryPage {

  constructor(private page: Page) {}

  private backpack =
    '#add-to-cart-sauce-labs-backpack';

  private cart =
    '.shopping_cart_link';

  async addBackpackToCart() {
    await this.page.click(this.backpack);
  }

  async openCart() {
    await this.page.click(this.cart);
  }
}