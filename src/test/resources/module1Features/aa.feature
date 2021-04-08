@smoke @regression
Feature: books list apisss
#  shopping basket features

  Scenario: test books list apiss
    Given setup api invento
    When trigger apiss
    Then verify books list is return
