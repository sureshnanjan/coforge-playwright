@30304
Feature: UI Mode - Set number of workers in ui mode interface

  Scenario: Set the number of workers in UI mode interface
    Given Display the setting screen of application
    When select the option to set the number of workers
    Then the result after performing the action should be displayed in numeric field
