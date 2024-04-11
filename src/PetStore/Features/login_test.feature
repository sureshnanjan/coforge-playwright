Feature: Login Scenario
    # Feature to test login scenarios

  Background: 
    Given Launch Application

  @login
  Scenario: Error message should be thrown for invalid login to application
    Given Provide "invalid_username" in the username field textbox
    Given Provide "invalid_password" in the password field textbox
    When Click on login button
    Then Error message "Invalid logins" should be displayed

  @login
  Scenario: Deleted/Inactive user should not be logged into application
    Given Provide "inactive_username" in the username field textbox
    Given Provide "password" in the password field textbox
    When Click on login button
    Then Error message "User doesnt exist in the system" should be displayed

  @login
  Scenario: Successful login with valid credentails
    Given Provide "valid_username" in the username field textbox
    Given Provide "valid_password" in the password field textbox
    When Click on login button
    Then Successfully logged into application and Home page screen should be displayed
