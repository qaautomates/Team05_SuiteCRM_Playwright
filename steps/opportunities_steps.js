import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';


Given('User is in suiteCRM login page', function () {
           loginObj = new login(page);
           await loginObj.launchApp();
           await loginObj.loginToSuiteCRM();   
           await expect(page).toHaveURL(/home/);

         });

When('User enters valid login credentials and click on login', function () {
           

         });

Then('User should be navigated to SuiteCRM dashboard', function () {
          

         });

Given('Login to the application with valid credentials', function () {
          

         });
       
Given('User is on home page after logging in', function () {
          

         });

When('User hovers on Opportunites tab in top navigation bar', function () {
          

         });
       
Then('User should see all {int} options from dropdown', function (int) {
         

         });
       
Given('User is in Opportunity tab', function () {
          

         });

When('User clicks on Create Opportunity menu option', function () {
         

         });

Then('{string} label should be visible', function (string) {
           

         });

Then('Create page should display Save button and Cancel button', function () {
          

         });

Then('Create page should display mandatory fields', function () {
           

         });

Then('Create page should display mandatory fields', function () {
          

         });


Then('Create page should display mandatory fields', function () {
           

         });


Then('Create page should display mandatory fields', function () {
           

          });


