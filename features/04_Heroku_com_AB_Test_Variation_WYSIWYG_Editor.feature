@herokuapp_A/B_Test_Variation_1_Page
@herokuapp_WYSIWYG_Editor_Page

Feature: Evaluating A/B test _1 page & WYSIWYG_Editor_Page from Herokuapp

    "As a Tester I have to verify A/B test _1 page & WYSIWYG_Editor_Page from Herokuapp"
    
  

    Scenario: Evaluating the test case for A/B test Variation
        Given I have the test case for Evaluating A/B test Variation_1
        And I habe to test the text from that page
        When I run the test
        Then The page shoul have the title with A/B Test Variation 1
        And The Text should contian "Also known as split testing"

Scenario: Evaluating the test case for WYSIWYG_Editor_Page
        Given I have the test case for Evaluating WYSIWYG_Editor_Page
        And I have to test title page
        And I have to Check the Tab File, Edit,View,Format
        When I run the test
        Then The page shoul have the title with An iFrame containing the TinyMCE WYSIWYG Editor
        And The tab File,Edit,View,Format


