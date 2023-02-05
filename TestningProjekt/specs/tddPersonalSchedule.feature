Feature: Personal Schedule Page
# Background: Given the user is logged in 

Scenario: Open Personal Schedule Page as a Logged-In User
Given the user is logged in
And the user is on the administration page
When the user clicks on #My Schedule
Then the Personal Schedule page should open

Scenario: View Planned Activities in Personal Schedule
Given the user is logged in
And the user is on the Personal Schedule page
When the user clicks #Show Schedule
Then the planned activities for the user should display

Scenario: View Detailed Information of a Personal Schedule Item
Given the user is logged in
And the user is on the Personal Schedule page with the planned activities displayed
When the user clicks on the first item
Then a pop-up with detailed information about the item should display.
