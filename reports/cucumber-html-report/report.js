$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/module1Features/mergeBasket.feature");
formatter.feature({
  "line": 2,
  "name": "merge basket",
  "description": "",
  "id": "merge-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#  shopping basket features"
    }
  ],
  "line": 5,
  "name": "merge basket",
  "description": "",
  "id": "merge-basket;merge-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "that i am on the shopping website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "search for the baskets",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "merge the baskets",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "able to view the merged baskets",
  "keyword": "Then "
});
formatter.match({
  "location": "Basket.thatIAmOnTheShoppingWebsite()"
});
formatter.result({
  "duration": 7439171,
  "status": "passed"
});
formatter.match({
  "location": "Basket.searchForTheBaskets()"
});
formatter.result({
  "duration": 31263,
  "status": "passed"
});
formatter.match({
  "location": "Basket.mergeTheBaskets()"
});
formatter.result({
  "duration": 38728,
  "status": "passed"
});
formatter.match({
  "location": "Basket.ableToViewTheMergedBaskets()"
});
formatter.result({
  "duration": 40595,
  "status": "passed"
});
});