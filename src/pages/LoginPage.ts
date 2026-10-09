import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage{

  constructor(page: Page) {
  super(page);
}

  

  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';

  async navigateToLoginPage() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}
