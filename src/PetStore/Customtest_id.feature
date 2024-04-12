@30311,
Feature: Add opportunity to set custom test-id from fixture in Playwright with Python
  #As a developer using Playwright with Python
  #I want to be able to set custom test-IDs from a fixture
  #So that I can easily identify elements for testing purposes without defining a new browser and context manually
 
 @playwright_python
  Scenario: Setting custom test-id from fixture;
    Given I have initialized a Playwright fixture for my test;
    When I set a custom test-id "custom_test_id" for an element using the fixture;
    Then the element should have the custom test-id "custom_test_id";
    And should run test successfully with "custom_test_id"

@playwright_python_Updating
  Scenario: Updating custom test-id from fixture;
    Given I have an element with an existing test-id "old_test_id";
    And I have initialized a Playwright fixture for my test;
    When I update the test-id to "new_test_id" for the element using the fixture;
    Then the element should have the updated test-id "new_test_id";

@playwright_python_Removing
  Scenario: Removing custom test-id from fixture;
    Given I have an element with a custom test-id "existing_test_id";
    And I have initialized a Playwright fixture for my test;
    When I remove the custom test-id from the element using the fixture;
    Then the element should not have a custom test-id;
