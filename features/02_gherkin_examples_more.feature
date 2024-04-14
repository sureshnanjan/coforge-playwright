Feature: Google Searching
  As a web surfer, I want to search Google, so that I can learn new things.
  Sometimes, scenarios in a feature file may share common setup steps. 
  Rather than duplicate these steps, they can be put into a Background section:
  
  Background:
    Given a web browser is on the Google page

   @backgorund @search
  Scenario: Simple Google search for pandas
    When the search phrase "panda" is entered
    Then results for "panda" are shown

  Scenario: Simple Google search for elephants
    When the search phrase "elephant" is entered
    Then results for "elephant" are shown

@example_table
Scenario Outline: 
#outlines are parameterized using "Examples" tables. Each Examples table has a 
#title and uses the same format as a step table. Each row in the table represents one test instance for that particular combination of parameters. 
#In the example above, there would be two tests for this Scenario Outline. The table values are substituted into the steps above wherever the column name is surrounded by the “<” “>” symbols.
    
    Given a web browser is on the Google page
    When the search phrase "<phrase>" is entered
    Then results for "<phrase>" are shown
    And the related results include "<related>"
    
    Examples: Animals
      | phrase   | related       |
      | panda    | Panda Express |
      | elephant | Elephant Man  |
