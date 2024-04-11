Scenario : User creates new project
  Given user is logged into application and on project page
  When user clicks on the created by me link
  And click on new project button 
  And user can able to enter details in fill form
  Then new project should appear in the list of projects

Scenario: Verify user can able to login into AMAZON
Given user have an account in AMAZON
When User enters the user name and password
And Click on sign in button
Then user can navigate to HOMEPAGE

 
