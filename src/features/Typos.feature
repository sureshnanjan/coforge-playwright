Feature: Home page scenarios

Scenario: Typos introduced

  Given user is visited heroku app
  When  user click on the Typos linck
  Then  user navigate to Typos page 
  And   Typos being introduced


Scenario: Typos may not introduced
  
  Given user is visited heroku app;
  When  user click on the Typos linck
  Then  user navigate to Typos page 
  And   Typos may not introduced