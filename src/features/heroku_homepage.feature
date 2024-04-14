@heroku
Feature: Home Page scenarios
    Scenario: Opens OK
        Given I visit heroku app
        When I check title
        Then I have contents