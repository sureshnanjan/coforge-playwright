@30199
Feature: Both --update-snapshots and fail on changes

  Scenario: Snapshot updating with failure on changes
    Given a snapshot testing framework is setup
    When I update the snapshot
    Then the snapshots are updated sucessfully
    And any change in the snapshos fail the test
