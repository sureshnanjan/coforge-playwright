@30314
Feature: Connect to preinstalled browser
    # Feature to test on preinstalled browser 

  @playwright
  Scenario: Run tests on installed chrome browser 
    Given Set configuration for browser "browserName" to playwright using Connect OverCDP with Port "9222"  
    When Run a test against chrome browser with playwright using connect port
    Then Successfully launch chrome browser without any errors
    And Able to run tests against chrome browser

  @playwright
  Scenario: Run tests on opera browser which not installed
    Given Set configuration for browser "browserName" to playwright using Connect OverCDP with Port "1000"
    When Run a test against opera browser with playwright using connect port
    Then Error should thrown for opera browser
