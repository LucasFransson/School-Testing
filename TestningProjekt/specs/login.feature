Feature: Testing Login

Scenario: Successful Login
  Given the user is on the login page
  When the user enters their email and password
  And clicks the login button
  Then the schedule should be visible

Scenario: Failed Login with Incorrect Credentials
  Given the user is on the login page
  When the user enters an incorrect username and password
  And clicks the login button
  Then the user should still be on the login page

Scenario: Failed Login with Empty Credentials
  Given the user is on the login page
  When the user leaves the username and password fields blank
  And clicks the login button
  Then the user should still be on the login page
