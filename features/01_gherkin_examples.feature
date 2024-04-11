@learning @google
Feature: Google Searching
  As a web surfer, I want to search Google, so that I can learn new things.
  # Steps should be written for reusability. A step hard-coded to search for pandas is 
  # not very reusable, but a step parameterized to search for any phrase is. 
  # Parameterization is handled at the level of the step definitions in the automation code, 
  # but by convention, it is a best practice to write parameterized values in double-quotes. 
  #This makes the parameters easy to identify.
  
  @panda
   Scenario: Simple Google search for panda
        Given a web browser is on the Google page
        When the search phrase panda is entered
        Then results for panda are shown
    @tiger @smoke @coforge
    Scenario: Simple Google search for tiger
        Given a web browser is on the Google page
        When the search phrase tiger is entered
        Then results for tiger are shown
    Scenario: Simple Google search for any animal
        Given a web browser is on the Google page
        When the search phrase "tiger" is entered
        Then results for "tiger" are shown
    

    Scenario: Google search with additional steps
        Given a web browser is on the Google page
        When the search phrase "panda" is entered
        Then results for "panda" are shown
        And the related results include "Panda Express"
        But the related results do not include "pandemonium"
    
    Scenario: Google search Doc strings pass more data
        Given a web browser is on the Google page
        When the search phrase "panda" is entered
        Then results for "panda" are shown
        And the result page displays the text
        """
        Scientific name: Ailuropoda melanoleuca
        Conservation status: Endangered (Population decreasing)
        """
    Scenario: Google search Tables helps organize examples
        Given a web browser is on the Google Language page
        |language|
        |english|
        |japanese|
        When the search phrase "panda" is entered
        Then results for "panda" are shown
        And the following related results are shown
        | related       |
        | Panda Express |
        | giant panda   |
        | panda videos  |