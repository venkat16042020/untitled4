$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("module1Features/ApiTesting.feature");
formatter.feature({
  "line": 2,
  "name": "books list api",
  "description": "",
  "id": "books-list-api",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
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
  "name": "test books list api",
  "description": "",
  "id": "books-list-api;test-books-list-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "setup api inventory",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "trigger api",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify books list is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "MyApiStepDefs.setupApiInventory()"
});
formatter.result({
  "duration": 5674600756,
  "status": "passed"
});
formatter.match({
  "location": "MyApiStepDefs.triggerApi()"
});
formatter.result({
  "duration": 18046800102,
  "status": "passed"
});
formatter.match({
  "location": "MyApiStepDefs.verifyBooksListIsReturned()"
});
formatter.result({
  "duration": 377081025,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c401\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:139)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat com.project.testing.module1.MyApiStepDefs.verifyBooksListIsReturned(MyApiStepDefs.java:35)\r\n\tat ✽.Then verify books list is returned(module1Features/ApiTesting.feature:8)\r\n",
  "status": "failed"
});
formatter.uri("module1Features/createBasket.feature");
formatter.feature({
  "line": 2,
  "name": "create basket",
  "description": "",
  "id": "create-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
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
formatter.match({
  "location": "Basket.thatIAmOnTheShoppingWebsite()"
});
formatter.result({
  "duration": 175912,
  "status": "passed"
});
formatter.match({
  "location": "Basket.iAddAnItemToTheBasket()"
});
formatter.result({
  "duration": 67659,
  "status": "passed"
});
formatter.match({
  "location": "Basket.iCanViewTheItemInMyBasket()"
});
formatter.result({
  "duration": 76057,
  "status": "passed"
});
formatter.uri("module1Features/deleteBasket.feature");
formatter.feature({
  "line": 2,
  "name": "delete basket",
  "description": "",
  "id": "delete-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
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
  "name": "delete basket",
  "description": "",
  "id": "delete-basket;delete-basket",
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
  "name": "search for the basket",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "delete the basket",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "unable to view the item in my basket",
  "keyword": "Then "
});
formatter.match({
  "location": "Basket.thatIAmOnTheShoppingWebsite()"
});
formatter.result({
  "duration": 105454,
  "status": "passed"
});
formatter.match({
  "location": "Basket.searchForTheBasket()"
});
formatter.result({
  "duration": 87257,
  "status": "passed"
});
formatter.match({
  "location": "Basket.deleteTheBasket()"
});
formatter.result({
  "duration": 67658,
  "status": "passed"
});
formatter.match({
  "location": "Basket.unableToViewTheItemInMyBasket()"
});
formatter.result({
  "duration": 78857,
  "status": "passed"
});
});