@30256
@feature-test-runner
@P3-collecting-feadback
Feature:Add the tags information into the JUnit report
 
  Scenario:Add tag if the defect is beacuse of product
    Given Test case with tag1, tag2 are available 
    And The test reporter is JUnit
    When  I execuite the test case
    Then The report should have tag1 and tag2
  
