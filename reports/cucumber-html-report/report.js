$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("module1Features/createBasket.feature");
formatter.feature({
  "line": 2,
  "name": "create basket",
  "description": "",
  "id": "create-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke1"
    },
    {
      "line": 1,
      "name": "@regression"
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
formatter.step({
  "line": 9,
  "name": "i can view the item in my basket",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "enter \"username\" and \"password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Basket.thatIAmOnTheShoppingWebsite()"
});
formatter.result({
  "duration": 2206105570,
  "status": "passed"
});
formatter.match({
  "location": "Basket.iAddAnItemToTheBasket()"
});
formatter.result({
  "duration": 69058,
  "status": "passed"
});
formatter.match({
  "location": "Basket.iCanViewTheItemInMyBasket()"
});
formatter.result({
  "duration": 68592,
  "status": "passed"
});
formatter.match({
  "location": "Basket.iCanViewTheItemInMyBasket()"
});
formatter.result({
  "duration": 57393,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "create basket2",
  "description": "",
  "id": "create-basket;create-basket2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "that i am on the shopping website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "i add an item to the basket",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "i can view the item in my basket",
  "keyword": "Then "
});
formatter.match({
  "location": "Basket.thatIAmOnTheShoppingWebsite()"
});
formatter.result({
  "duration": 111519,
  "status": "passed"
});
formatter.match({
  "location": "Basket.iAddAnItemToTheBasket()"
});
formatter.result({
  "duration": 61126,
  "status": "passed"
});
formatter.match({
  "location": "Basket.iCanViewTheItemInMyBasket()"
});
formatter.result({
  "duration": 62526,
  "status": "passed"
});
});