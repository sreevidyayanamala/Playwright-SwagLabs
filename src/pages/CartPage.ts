import { Page, expect } from '@playwright/test';

export class CartPage {

  constructor(private page: Page) {}

  async verifyCartPage() {
    await expect(this.page)
      .toHaveURL(/cart/);
  }
}