import { test } from '@playwright/test';

export class login{
    constructor(page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.login = page.getByRole('button', { name: 'Log In' });
    }

    async launchApp() {
        await this.page.goto('/');
    }

    async loginToSuiteCRM() {
        await this.username.fill('will');
        await this.password.fill('will');
        await this.login.click();
    }
}