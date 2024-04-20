@herokuapp_A/B_Test_Variation_1_Page

Feature: Evaluating A/B test _1 page 

    "As a Tester I have to verify A/B test _1 page"
  

    Scenario: Evaluating the test case for A/B test Variation
        Given I have the test case for Evaluating A/B test Variation_1
        And I habe to test the text from that page
        When I run the test
        Then The page shoul have the title with A/B Test Variation 1
        And The Text should contian "Also known as split testing"


