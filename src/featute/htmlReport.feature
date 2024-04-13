
@30141
Feature: HTML report annotation Text Improvement
 
#I want to be able to copy the annotation text with one click rather than selecting the entire text and copy .
#Search on annotation text is not enabled . It can be useful when I want to get all the tests with certain annotation.
 
Scenario: Enable one-click copying of annotation Text
    Given there is an HTML report displaying test results with annotations
        When user clicks on annotation Text
        Then the annotation text should be automatically copied to clipboard
 
Scenario:Implement Search functionality
    Given there is an HTML report displaying test results with annotations
        When user wants to search for tests with some annotation
        Then the HTML report should provide search button to search annotation 
        