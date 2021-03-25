package com.testRunners.module1TestRunners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:reports/cucumber-html-report",
                "json:reports/cucumber.json",
                "pretty"},
        tags = {"@runit,@run","~@ignore"},
        features = {"src/test/resources/module1Features/createBasket.feature"},
        glue = {"com/project/testing/module1"}
)

public class US10002TestRunner {

}