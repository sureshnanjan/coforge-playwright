@30093
Feature: Show URL's within annotations as hyperlink

  Scenario: Display URL as hyperlink in annotations
    Given a test with annotations including a URL
    When the user views in annotations
    Then the URL should be displayed as a hyperlink should have a clickable link
