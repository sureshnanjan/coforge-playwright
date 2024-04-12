@30318
Feature: Evaluating Mode for Tests

"As a Tester I have to test the test case in the Evaluating mode"

@positive
Scenario: Running a test in evaluating mode
    Given I have a test case which is failing 
    And  I mark the test as "Evaluating"
    When I run the test 
    Then the test fails, it is marked as failed +Ignored

@Negative
Scenario: Running a test in evaluating mode
    Given I have a test case Which will be pass
    And I mark the test as "Evaluating"
    When I run the test
    Then the test passed, it is marked as passed 
    
    
    


