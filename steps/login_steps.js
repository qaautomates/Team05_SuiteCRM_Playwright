import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

import {login} from './../pages/loginPage.js';

let loginObj;

Given('User is in suiteCRM login page', async ({page}) => {
    loginObj = new login(page);
    await loginObj.launchApp();
    
});

When('User enters valid login credentials and click on login', async ({page}) => {
    await loginObj.loginToSuiteCRM();
});

Then('User should be navigated to SuiteCRM dashboard', async ({page}) => {
    await expect(page).toHaveURL(/home/);
});