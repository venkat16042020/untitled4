@run
Feature: merge basket
#  shopping basket features

  Scenario: merge basket
    Given that i am on the shopping website
    And search for the baskets
    When merge the baskets
    Then able to view the merged baskets