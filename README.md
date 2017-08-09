# Outline
- Prerequisites for project build and run
- Preparing project
- IntelliJ code style settings
- Compiling project
- Running tests
- Run application
- Distribution Package Creation
- Uploading distribution package to nexus
- Generating dashboard with reports
- Deploying to C3

# Prerequisites
- JDK 8
- Gradle 4.0

      UNI-BT:UVS/VPN

# Preparing project
0. Clone this Codebase(Git) template repository
      
       > git clone --branch master --depth=1 ssh://git@codebase.plus4u.net:9422/uu_appg01_template-uu5-java.git

1. Rename root project folder uu_appg01_main-uu5-java to your new project name

2. Disconnect from git repository

        > git remote rm origin

3. If you have new repository for new project, you can connect it with

        > git remote add origin ssh://git@codebase.plus4u.net:9422/<new_repozitory>.git
   Verify with
   
        > git remote -v  

   Always follow the UAF GIT Flow!
      
        VPH-BT:44191587611027055


4. Change project properties
    - file _./build.gradle_:  group, version, description
    - file _./build.gradle_: appBoxLocationUri, resourcePoolUri (uesuri of AppBox for deploying to C3)
    - file _./settings.gradle_: rootProject.name and included subprojects names.
    
5. optional: add another sub-project (module)
    - Default project structure is prepared as multi-project. You can easily add another sub-project, which will inherit all settings from build.gradle file in project root.
    - You can create new sub-project in IntelliJ by right clicking on root project - new - module - Gradle/Java or by copying the template project. After that check file _settings.gradle_ if it includes all required sub-projects.

# IntelliJ code style settings
Configuration XML file for UU Code Style is located in _./config/intellij-java-uuAppg01-style-xx.xml_. It contains IDE settings for unified code style, which is inspired by Google Code Style. Every developer in team should import this settings to prevent inconsistency.

To apply settings:
1. open IntelliJ IDEA
2. go to File - settings (ctrl+alt+s)
3. go to tab Editor - Code Style
4. click on the settings icon next to the Scheme and select Import Scheme - IntelliJ IDEA Code Style XML
5. select xml file from ./config folder and confirm

# Run application

In project root directory run command

    > gradle uuRun

Application starts locally on embedded tomcat on default port 8080 and can be accessed e.g. with browser (http://localhost:8080/uu-demoappg01-main/0-0/).
  
# Compiling project

In project root directory run command

    > gradle classes

All compiled production Java classes with copies of resources can be found in /build folder

# Running tests

In project root directory run command

    > gradle test

Result of tests can be found in folder /build/reports/tests. It is created in interactive html format.


# Distribution Package Creation
In project root directory run command

    > gradle war

Executable war file is created to /build/libs folder.
Application can be started using this war file with command java -jar nameOfWar.war in /build/libs folder.

For cleaning project build directory run command

    > gradle clean

You can also compile classes, run tests, package project with command

    > gradle build
    
# Uploading distribution package to nexus 
1. Set Nexus repository url in build.gradle file. (Parameters uuNexusReleaseRepository and uuNexusSnapshotRepository)
2. In project root directory run command

       > gradle uploadArchives    
    
# Generating dashboard with reports   
In project root directory run command
    
    > gradle uuReport
    
Reports (test, checkstyle, jococo) are created in _./projectName/build/reports_ folder.
Dashboard with all these reports is in folder _./projectName/build/reports/buildDashboard_.

# Deploying to C3    
Project is using gradle uu deploy plugin, which adds tasks for creating uuAppBox, uploading attachments, deploying to C3, sharing uuApp etc.

Plugin documentation can be found in file uu_appg01_gradle-plugin_readme.md, located in root of this project.
