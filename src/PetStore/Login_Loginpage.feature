Feature: User Login;
#As a register user 
#user want to login the system 
#so that can access my system

  @Flipkart-positive
  Scenario: Successful login with the valid credentials;
   
    Given :  User on the login page
    When :   enter Valid username "Rajesh" and Password "Raja@123"
    And :  user should click on login button
    Then :  user Should redirected to the Home page

  @Flipkart-negative
  Scenario: Login attempt with invalid credentials
    
    Given : User on the login page
    When : user enter invalid username "Rajesh1" and  Invalid password "Raja"
    And : user should click on login button
    Then : user Should see an error message Invalid username or password
