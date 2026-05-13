import { expect } from '@playwright/test';
import { Given, When, Then } from  '../fixtures/testFixtures';

Given('User is in suiteCRM login page', async ({loginPage}) => {
    await loginPage.launchApp();
});

When('User enters valid login credentials and click on login', async ({loginPage}) => {
    await loginPage.loginToSuiteCRM();
});

Then('User should be navigated to SuiteCRM dashboard', async ({page}) => {
    await expect(page).toHaveURL(/home/, { timeout : 15000 });
});