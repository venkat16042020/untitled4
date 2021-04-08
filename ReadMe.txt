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
---------
Firefox 87
chrome 89
ie8
selenium 3.141.59
java 8
cucumber 1.2.5
junit 4.1.2
    -------------
    http://192.168.225.148:4444/grid/console
    --------
    17:14:01.622 INFO [Hub.start] - Nodes should register to http://192.168.225.148:4444/grid/register/
    ------------
    register a  node;
    java -jar selenium-server-standalone-3.141.59.jar -role node -port 5555 -maxSession 20
    --------------------------

