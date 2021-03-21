@run
Feature: create basket
#  shopping basket features

  Scenario: create basket
    Given that i am on the shopping website
    When i add an item to the basket
    Then i can view the item in my basket