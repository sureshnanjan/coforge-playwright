@29677
@p3-collecting-feedback
Feature: Filter request by the phrase in a network tab
    # Can able to filter the request by using the entered text

  @playwright@Positive
  Scenario: User should be able to filter request by using phrase in the network tab
    Given Launch playwright trace window
    And Navigate to network tab
    And launch application url:"www.petstore.com"
    When User search with the "pet" in the network tab search field
    Then User able to filter and see 10 records

  @playwright@Negative
  Scenario: User should be not able to filter request by using phrase in the network tab
    Given Launch playwright trace window
    And Navigate to network tab
    And launch application url:"www.petstore.com"
    When User search with the "11111" in the network tab search field
    Then No results should displayed with "11111"
