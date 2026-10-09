import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async verifyProductsPage() {
    await expect(this.page).toHaveURL(/inventory/);
  }
}