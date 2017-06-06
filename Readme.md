# Outline
- Prerequisites for project build and run
- Preparing project
- Compiling project
- Running tests
- Run application
- Distribution Package Creation
- Uploading distribution package to nexus
- Generating dashboard with reports
- Deploying to C3

# Prerequisites
- JDK 8
- Gradle 3.5
- connection to UVS-VPN network (for access to UVS-Nexus repository)

      UNI-BT:UVS/VPN

# Preparing project
1. Rename project uu_appg01_template-uu5-java to new project name.
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
    - file _./settings.gradle_: rootProject.name
    - file _./subProjectName/build.gradle_: uuDeploySetting.appBoxLocationUri (uesuri of AppBox for deploying to C3)
    
5. optional: add another sub-project (module)
    - Default project structure is prepared as multi-project. You can easily add another sub-project, which will inherit all settings from build.gradle file in project root.
    - You can create new sub-project in IntelliJ by right clicking on root project - new - module - Gradle/Java or by copying the template project. After that check file _settings.gradle_ if it includes all required sub-projects.
  
# Compiling project

In project root directory run command

    > gradle classes

All compiled production Java classes with copies of resources can be found in /build folder

# Running tests

In project root directory run command

    > gradle test

Result of tests can be found in folder /build/reports/tests. It is created in interactive html format.


# Run application

In project root directory run command

    > gradle uuRun

Application starts locally on embedded tomcat on default port 8080 and can be accessed e.g. with browser (http://localhost:8080).


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
Project is using gradle uu deploy plugin, which adds task for creating uuAppBox, uploading attachments and deploying to C3.
## 1. Deploy task configuration
Configuration of the deploy task is done in uuDeploySetting extension of build.gradle file.

Parameters to configure:
- uuDeploySetting.appBoxLocationUri (required) - UESURI of the folder where the AppBox will be created. 
- uuDeploySetting.warPath (optional) - Absolute path to war file. Default value is taken from output of gradle's war task (_./subProjectName/build/libs/subProjectName-version.war_).
- uuDeploySetting.deployDescriptorPath (optional) - Absolute path to deploy descriptor json. Default value is _./subProjectName/src/resources/deploy_descriptor.json_

Name and code of the AppBox and codes of AppBox's attachments are derived from values in deploy descriptor file.

_./build.gradle_ example:

    uuDeploySetting {
      appBoxLocationUri = 'ues:UU-BT:PRD.UU-APPG01-SERVER-JAVA/APPBOX'
    }

_Note that if locations of sub-project's AppBoxes differ (or you want to specify other parameters), extension uuDeploySetting can be also set in sub-project's build.gradle file (eg. ./subProjectName/build.gradle)_   
    
## 2. Running deployment    
To run deployment, in project root directory run command

    > gradle uuDeploy

_Note that user running the deploy task has to have interface with uuAppBox MAR._

## 3. Authorization    
Task assumes that valid oidc token is located in ./config/oidc_token.json with following structure

    {
      "id_token": "eyJ0....ZoY"
    }
    
Deployment can be also run with OIDC token in different location. In this case, in project root directory run command

    > gradle uuDeploy -PoidcTokenPath='absolutePathToTokenFile'
    
Valid token can be acquired at
https://oidc.plus4u.net/uu-oidcg01-main/0-0/showToken?client_id=gradle 
