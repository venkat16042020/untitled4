@smoke @regression
Feature: books list api
#  shopping basket features

  Scenario: test books list api
    Given setup api inventoryz
    When trigger api
    Then verify books list is returned

