package com.testRunners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:reports/cucumber-html-report",
                "json:reports/cucumber.json",
                "pretty"},
        tags = {"@regression"},
        features = {"src/test/resources"},
        glue = {"com/project/testing"}
)

public class RegressionTestRunner {

}