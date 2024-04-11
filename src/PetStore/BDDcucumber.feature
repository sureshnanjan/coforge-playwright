

Feature: User Login;

#As a register user 
#I want to login the system 
#so that can access my system

@Flipkart
Scenario: Successful login with the valid credentials;

Given :  I am on the login page
When :   enter Valid username "Rajesh" and Password "Raja@123"
Then :  I Should redirected to the dashboard page  

@Flipkart
Scenario: Login attempt with invalid credentials
 
Given : i am on the login page 
When : I enter invalid username "Rajesh1" and  Invalid password "Raja"
Then : I Should see an error message Invalid username or password