@addremoveelements
Feature: Add/Remove Elements

   Scenario: Add the elements;

   Given I have visited heroku app
   When  user click on the Add element
   Then  delete button added

   Scenario: Delete the elements
    Given  I have  visited the heroku app 
    When  user click on the add element
    And   delete button added
    Then  user click on the delete button delete element will be removed













