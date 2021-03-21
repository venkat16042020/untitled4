package com.project.testing.module1;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.concurrent.TimeUnit;
import static org.junit.Assert.assertTrue;

public class Basket {
    //WebDriver driver;

    @Given("^that i am on the shopping website$")
    public void thatIAmOnTheShoppingWebsite() {
    }

    @When("^i add an item to the basket$")
    public void iAddAnItemToTheBasket() {
    }

    @Then("^i can view the item in my basket$")
    public void iCanViewTheItemInMyBasket() {
    }

    @And("^search for the basket$")
    public void searchForTheBasket() {
    }

    @When("^delete the basket$")
    public void deleteTheBasket() {
    }

    @Then("^unable to view the item in my basket$")
    public void unableToViewTheItemInMyBasket() {
    }

    @And("^search for the baskets$")
    public void searchForTheBaskets() {
    }

    @When("^link the baskets$")
    public void linkTheBaskets() {
    }

    @Then("^able to view linked baskets$")
    public void ableToViewLinkedBaskets() {
    }

    @When("^merge the baskets$")
    public void mergeTheBaskets() {
    }

    @Then("^able to view the merged baskets$")
    public void ableToViewTheMergedBaskets() {
    }

    @When("^update the basket$")
    public void updateTheBasket() {
    }

    @Then("^able to view the updated basket$")
    public void ableToViewTheUpdatedBasket() {
    }
}