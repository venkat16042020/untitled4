@run
Feature: update basket
#  shopping basket features

  Scenario: update basket
    Given that i am on the shopping website
    And search for the basket
    When update the basket
    Then able to view the updated basket