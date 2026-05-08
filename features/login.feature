
@test
Feature: Login functionality

Scenario: Login with valid credentials
Given User is in suiteCRM login page
When User enters valid login credentials and click on login
Then User should be navigated to SuiteCRM dashboard