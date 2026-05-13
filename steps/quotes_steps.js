import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures/testFixtures';


Given('Login to the application with valid credentials', async ({loginPage}) => {
    await loginPage.launchApp();
    await loginPage.loginToSuiteCRM();
});

When('user hovers on Quotes tab', async ({quotesPage}) => {
    await quotesPage.hoverOnQuotesTab();
});

Then('All dropdown {string} should be displayed', async ({quotesPage}, dropdown) => {
    await expect(quotesPage.getMenuItem(dropdown)).toBeVisible();
});

Given('User is on Quotes tab', async ({}) => {
  // Step: Given User is on Quotes tab
  // From: features/quotes.feature:18:1
});

When('User clicks on create quote option', async ({}) => {
  // Step: When User clicks on create quote option
  // From: features/quotes.feature:19:1
});

Then('{string} module title should be visible', async ({}, arg) => {
  // Step: Then "QUOTES CREATE" module title should be visible
  // From: features/quotes.feature:20:1
});
