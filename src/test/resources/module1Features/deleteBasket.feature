@run
Feature: delete basket
#  shopping basket features

  Scenario: delete basket
    Given that i am on the shopping website
    And search for the basket
    When delete the basket
    Then unable to view the item in my basket