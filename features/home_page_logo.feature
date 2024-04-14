Feature: Petstore Home Page Logo
    Scenario: Logo
    # Breaks the Single Responsibility Principle
        Given The Petstore Page is visited by a user
            When he sees the page
            Then The Logo is on the left substituted
            And The Logo is Green Colour
            And The LOgo font is Times Roman
    Scenario: Placement
    Scenario: Font
    Scenario: Colour