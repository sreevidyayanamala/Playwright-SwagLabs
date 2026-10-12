import { expect, Page } from '@playwright/test';

export class CheckoutPage {

  constructor(private page: Page) {}

  private checkoutButton = '#checkout';
  private firstName = '#first-name';
  private lastName = '#last-name';
  private postalCode = '#postal-code';
  private continueButton = '#continue';
  private finishButton = '#finish';

  async clickCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async enterCheckoutDetails(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.page.fill(this.firstName, firstName);
    await this.page.fill(this.lastName, lastName);
    await this.page.fill(this.postalCode, postalCode);
  }

  async continueCheckout() {
    await this.page.click(this.continueButton);
  }

  async finishCheckout() {
    await this.page.click(this.finishButton);
  }

  async verifyOrderSuccess() {
    await expect(
      this.page.locator('.complete-header')
    ).toHaveText('Thank you for your order!');
  }
}