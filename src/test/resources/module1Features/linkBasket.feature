@run
Feature: link basket
#  shopping basket features

  Scenario: link basket
    Given that i am on the shopping website
    And search for the baskets
    When link the baskets
    Then able to view linked baskets