uuApp Java Library readme

Outline
=======
- Compiling project
- Running tests
- Distribution Package Creation


Compiling project
===============================

In root directory of library 'uu_appg01_template-java-library' run command

    > gradlew classes

All compiled production Java classes with copies of resources can be found in /build folder

Running tests
=============

In root directory of library 'uu_appg01_template-java-library' run command

    > gradlew test

Result of tests can be found in folder /build/reports/tests. It is created in interactive html format.


Distribution Package Creation
=============================
In root directory of library 'uu_appg01_template-java-library' run command

    > gradlew jar

Jar is created to /build/libs folder.

For cleaning project build directory run command

    > gradlew clean

For all steps: compile classes, run tests, package project run command

    > gradlew build