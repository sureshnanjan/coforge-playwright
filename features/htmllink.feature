@30140
Feature: Support for link text in annotation description
  As a user, want to display readable short link instead of displaying link itself

  @htmlLinkPositive
  Scenario: Display readable short link instead of displaying link itself
    Given a annotation containing a link with custom text
    When the scenario is executed
    Then the readable link text within the annotation should be displayed correctly

   @htmlLinkPositive
  Scenario: Displaying link itself
    Given a annotation containing a link with custom text
    When the scenario is executed
    Then the link text within the annotation should be displayed link itself
