Scenario : User creates new project
  Given user is logged into application and on project page
  When user clicks on the created by me link
  And click on new project button 
  And user can able to enter details in fill form
  Then new project should appear in the list of projects
 
Defect1: Unable to delete the project 
Scenario : User attempts to delete the project
Given the user is logged 
When user selects the projects 
And click on delete project
And verify project has deleted message
Then project should not be deleted and throws an error