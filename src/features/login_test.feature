Feature: User is logging into example portal and adding item to cart and checkout

    Scenario: User logs in successfully and navigates to their profile

    Given User is on the login page
    When User enters valid credentials and clicks login
    Then User should be redirected to their profile page

    Scenario: User adds an item to their cart and proceeds to checkout

    Given User is logged in and on the product page
    When User clicks on "Add to cart" button
    Then User should see the item in their cart
    When User clicks on "Proceed to checkout" button
    Then User should be redirected to the checkout


