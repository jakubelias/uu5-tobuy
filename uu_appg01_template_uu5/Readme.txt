uuApp Java uu5 template readme

Outline
=======
- Compiling project
- Running tests
- Run application
- Distribution Package Creation

Compiling project
===============================

In root directory of library 'uu_appg01_template-uu5-java-dev' run command

    > gradlew classes

All compiled production Java classes with copies of resources can be found in /build folder

Running tests
=============

In root directory of library 'uu_appg01_template-uu5-java-dev' run command

    > gradlew test

Result of tests can be found in folder /build/reports/tests. It is created in interactive html format.


Run application
===============================

In root directory of library 'uu_appg01_template-uu5-java-dev' run command

    > gradlew bootRun

Application starts locally on embedded tomcat on default port 8080 and can be accessed e.g. with browser (http://localhost:8080).


Distribution Package Creation
=============================
In root directory of library 'uu_appg01_template-uu5-java-dev' run command

    > gradlew bootRepackage

Executable war file is created to /build/libs folder.
Application can be started using this war file with command java -jar nameOfWar.war in /build/libs folder.

For cleaning project build directory run command

    > gradlew clean

You can also compile classes, run tests, package project with command

    > gradlew build