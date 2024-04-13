@29549 @feature-expect @P3-collecting-feedback
Feature: Add .all as property of expect

@positive
Scenario: to be able to assert that all buttons on a page are enabled without having to loop over all buttons
    Given: I access Heroku App "AddRemove" Examples with "5" elements added
    When:  I assert all for "enabled" property
    Then: The result should be True
    
@negative
Scenario: to be able to assert that all buttons on a page are not enabled
    Given: I access Heroku App "Broken Images" Examples with "0" elements added
    When:  I assert all for url property set to valid file
    Then: The result should be False


