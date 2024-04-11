Feature:user is able to navigate to issue page

Scenario:issue page should be Visible

Given User should be able to loggned in and navigate to issues page
When User clicks on issues page 
Then user should able to view list of open and close issues


Scenario:Creating new issue
Given User should be able to create the new issue
When User click on the new issue button
Then User navigate the new issue creation page
And User should be able to create customised issue
Example:|New issues|
        |Bug Report |
        |Documentation|
        |Questions / Help |

#Defect1:User is not able to see the created issure

Scenario:User unable to see the created issues
Given User click on the new button
When User able to create the new issue
Then User not able to see the created issues


#Defec2: User able to see search button in git home page

Scenario: User  able to see the search button on the home pageH
Given User logged in to the git
When User able to navigate to the git home page
Then User is not able to see the search button on the home page


























