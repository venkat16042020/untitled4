package com.testRunners.module1TestRunners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:reports/cucumber-html-report",
                "json:reports/cucumber.json",
                "pretty"},
        tags = {"@runit,@run","~@ignore"},
        features = {"src/test/resources/module1Features/ApiTesting.feature"},
        glue = {"com/project/testing/module1"}
)

public class tttUS10001TestRunner {

}