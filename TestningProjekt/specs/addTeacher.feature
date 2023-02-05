
Feature: Log in user
Background: Before Each
Given Im logged in and on the teachers page



    Scenario: As an admin I want to open the Register New Teacher page
    Given that I am on the teachers page
    When I click on Create button
    Then I should see the Save button

    Scenario: As an admin I want to be able to click on the save button 
    Given that I am on the Register New Teacher page
    When I have filled in all the fields
    Then the Save button should be clickable

    Scenario: As an admin I want to create a new teacher
    Given that I am on the Register New Teacher page and filled in all information
    When I click on the Save button
    Then a new teacher should be in the database