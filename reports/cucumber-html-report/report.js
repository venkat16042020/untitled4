$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/module1Features/createBasket.feature");
formatter.feature({
  "line": 2,
  "name": "create basket",
  "description": "",
  "id": "create-basket",
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
  "name": "create basket",
  "description": "",
  "id": "create-basket;create-basket",
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
  "name": "i add an item to the basket",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i can view the item in my basket",
  "keyword": "Then "
});
formatter.match({
  "location": "Basket.thatIAmOnTheShoppingWebsite()"
});
formatter.result({
  "duration": 338300269,
  "status": "passed"
});
formatter.match({
  "location": "Basket.iAddAnItemToTheBasket()"
});
formatter.result({
  "duration": 33130,
  "status": "passed"
});
formatter.match({
  "location": "Basket.iCanViewTheItemInMyBasket()"
});
formatter.result({
  "duration": 36396,
  "status": "passed"
});
});