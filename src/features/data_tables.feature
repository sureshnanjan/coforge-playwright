@runonlythis
Feature: Data Tables
    Scenario: Table without Headers data
        Given table without headers
        |row1-col1| row1-col2|
        |row2-col1| row2-col2|
        |row3-col1| row3-col2|

    Scenario: Table raw Data
        Given table with headers
        |HEADING01| HEADING02|
        |row1-col1| row1-col2|
        |row2-col1| row2-col2|
        |row3-col1| row3-col2|

