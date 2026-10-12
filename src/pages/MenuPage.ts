import { Page } from '@playwright/test';

export class MenuPage {

  constructor(private page: Page) {}

  private menuButton =
    '#react-burger-menu-btn';

  private logoutButton =
    '#logout_sidebar_link';

  async openMenu() {
    await this.page.click(this.menuButton);
  }

  async logout() {
    await this.page.click(this.logoutButton);
  }
}