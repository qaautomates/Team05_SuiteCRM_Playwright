@test
Feature: Quotes functionality

Background: User logged in to Suite CRM application
Given Login to the application with valid credentials

Scenario: Verify the options of quotes tab
When user hovers on Quotes tab
Then All dropdown "<options>" should be displayed
Examples:
| options |
| Create Quote |
| View Quotes |
| Import |
| Import Line Items |

Scenario: Verify user is able to navigate to create quote page
Given User is on Quotes tab
When User clicks on create quote option
Then "QUOTES CREATE" module title should be visible