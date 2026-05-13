@test
Feature: Opportunities functionality

Background: User logged in to SuiteCRM application
Given Login to the application with valid credentials

Scenario: Verify options in Opportunities tab
When User hovers on Opportunites tab in top navigation bar
Then User should see all 3 options from dropdown
Examples:
| options |
| Create Opportunity |
| View Opportunities |
| Import Opportunities |

Scenario: Verify user can navigate to Create Opportunity page
Given User is in Opportunity tab
When User clicks on Create Opportunity menu option
Then "Create" label should be visible

Scenario: Verify visibility of buttons and fields
Then Create page should display Save button and Cancel button

Scenario: Verify visibility of mandatory fields
Then Create page should display mandatory fields
Examples: 
| fields |
| Opportunity Name |
| Account Name |
| Sales Stage |
| Expected Closed Date |

#Steps not created from here

Scenario: Verify Opportunity is created with valid Opportunity Name input
When User clicks on save button with valid Opportunity Name
Then Opportunity should be created

Scenario: Verify Opportunity is created with valid Account Name from dropdown
#When User clicks on save button with valid Account Name selected from dropdown
Then Opportunity should be created with valid Account name

Scenario: Verify Opportunity is created with valid Opportunity Amount input
#When User clicks on save button with valid Opportunity Amount
Then Opportunity should be created with valid Opportunity Amount

Scenario: Verify Opportunity is created be selecting Sales Stage from dropdown
#When User clicks on save button with Sales Stage option from dropdown
Then Opportunity should be created with Sales stage selection

Scenario: Verify Opportunity is created with valid  Expected Close Date input
#When User clicks on save button with valid Expected Close Date
Then Opportunity should be created with valid  Expected Close Date

Scenario: Verify "Assigned To" field is displayed with current user
When User clicks on Create Opportunity menu option
Then Assigned To field should be populated with current user

Scenario: Verify user is able to remove the "Assigned To" value
When Click on the 'X' mark in the Assigned to field value
Then Current assigned user name should be removed

Scenario: Verify user is able to navigate to View Opportunities page
Given User is on Opportunity tab 
When User clicks on View Opportunity dropdown menu option
Then "Opportunities" header should be visible

Scenario: Verify Filter button is enabled on View opportunity page
When User clicks on View Opportunity dropdown menu option
Then Filter button should be enabled

Scenario: Verify Basic Filter label is visible
When User clicks on Filter button in View Opportunity page
Then Basic Filter label should be visible

Scenario: Verify visibility of Clear button on Basic Filter panel
Then User should see Clear button

Scenario: Verify visibility of Search button on Basic Filter panel
Then User should see Search button

Scenario: Verify user is able to search the created Opportunity using filter 
Given User is on Basic Filter page
When User enters the "<values>" for below details and click on Search button
Then Corresponding Opportunity details should be displayed
Examples: 
| values |
| Opportunity Name |
| Account name |
| Expected Close date |
| Assigned To |

Scenario: Verify all the Opportunity records are displayed once filter is cleared
Given User is on Opportunity tab 
When User clicks on "X" near filter to clear the filter on Opportunities page
Then Filter should be cleared and list of opportunities should be displayed
