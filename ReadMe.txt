<parallel>classes</parallel>: this will run only features in parallelr run not the steps
<parallel>classesAndMethods</parallel>:  this will run features and steps in parallel. But this is not advised.
       <plugin>
          <artifactId>maven-surefire-plugin</artifactId>
          <version>2.22.1</version>
            <configuration>
                <parallel>classes</parallel>
                <useUnlimitedThreads>true</useUnlimitedThreads>
            </configuration>
        </plugin>
--maven execution command:
D:\Testing\Selenium\untitled4>mvn clean test -Dtest=com.testRunners.SmokeTestRun
ner