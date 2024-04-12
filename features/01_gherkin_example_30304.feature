Feature: Worker Count Configuration in UI Mode

   Scenario: Adding "worker" count configuration in UI mode
    Given using Playwright in UI mode
    When open the configuration window
    Then should see an option to configure the number of workers

  Scenario: Setting the number of workers in UI mode
    Given configuring the settings in UI mode
    When the number of workers to a specific value
    Then the configured number of workers should be used when running tests

  Scenario: Verifying default worker count in UI mode
    Given running tests in UI mode without configuring the number of workers
    When start the test execution
    Then the default number of workers should be used

  Scenario: Testing with different worker counts in UI mode
    Given configured different numbers of workers in UI mode
    When tests with each configured number of workers
    Then observe differences in test execution time and resource utilization
