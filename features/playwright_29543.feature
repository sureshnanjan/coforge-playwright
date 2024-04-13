@29543 @feature-expect @P3-collecting-feedback
Feature: Playwright Component toContainURL
    Scenario: we want to check current url contains specific sub string which is existing. 
        Given I open petstore app using Playwright
        When i check tocontainurl for "Catalog.action"
        Then it should be found 
    Scenario: we want to check current url contains specific sub string which is not existing. 
        Given I open petstore app using Playwright
        When i check tocontainurl for "not.existing"
        Then it should be not be found 

        