@30266, @playwright
Feature: Failed test cases 
    # Feature to retry test  

  @playwright
  Scenario: Do not retry test when a test marked with test.fail
    Given Config property value trace from playwright config for retry
    When Running playwright tests with test.fail()
    Then Should not run multiple times for marked test cases as test.fail
     