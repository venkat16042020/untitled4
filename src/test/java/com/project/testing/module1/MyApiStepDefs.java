package com.project.testing.module1;

import com.google.gson.JsonObject;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

public class MyApiStepDefs {

    private String booksListEndPoint;
    private  RequestSpecification requestObj;
    private  Response responseObj;

    @Given("^setup api inventory$")
    public void setupApiInventory() {
        setBooksListEndPoint("https://api.nytimes.com/svc/books/v3/lists.{format}");
        JsonObject requestDataObj = new JsonObject();
        //setup request body content
        setRequestObj(given().body(requestDataObj.toString()));
    }

    @When("^trigger api$")
    public void triggerApi() {
        setResponseObj(getRequestObj().when().get(booksListEndPoint,"json"));
    }

    @Then("^verify books list is returned$")
    public void verifyBooksListIsReturned() {
        System.out.println(getResponseObj().getContentType());
        System.out.println(getResponseObj().asString());
        getResponseObj().then().statusCode(200);
    }


    public String getBooksListEndPoint() {
        return booksListEndPoint;
    }

    public void setBooksListEndPoint(String booksListEndPoint) {
        this.booksListEndPoint = booksListEndPoint;
    }

    public RequestSpecification getRequestObj() {
        return requestObj;
    }

    public void setRequestObj(RequestSpecification requestObj) {
        this.requestObj = requestObj;
    }

    public Response getResponseObj() {
        return responseObj;
    }

    public void setResponseObj(Response responseObj) {
        this.responseObj = responseObj;
    }

}
