@30266
Feature: Do not retry test marked with test.fail if it has passed
   # Test should be not be retried more than once

    @Positive
    Scenario: Test which is marked with fail should not be retried
    Given set property in playwright config to enable retrying
    When Run test suites including a test marked as test.fail
    Then Should successfully run and mark test as failed 
    And Only one time test should be retried

    @Negative
    Scenario: Test which is marked with fail should be retried
    Given test case with test.fail should be executed
    When the test case execution has failed
    Then Playwright should be retry with passed case 
    