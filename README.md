# Outline
- Prerequisites for uuApp project
- uuApp Local Deployment
  1. Preparing project
  2. IntelliJ code style settings
  3. Install and run client
  4. Install and run server
  5. Using predefined gradle tasks 
- uuApp Initialization
  1. Initialize uuAppWorkspace
  2. Configure profiles and permissions
  3. Test functionality
- uuApp Distribution Package
  1. Package creation
  2. Uploading package into Nexus repository
- Generating dashboard with reports
- uuApp Production deployment to C3
- uuService (only server side) development
- uuWebside (only client side) development

# Prerequisites
- JDK 8
- Gradle 4.0
- MongoDB 3.2+
- Node.js

      UNI-BT:UVS/VPN

# uuApp Local Deployment
## 1. Preparing project
0. Clone this Codebase(Git) template repository
      
       > git clone --branch master --depth=1 ssh://git@codebase.plus4u.net:9422/uu_appg01_template-uu5-java.git

1. Rename root project folder uu_appg01_template-uu5-java to your new project name

2. Disconnect from git repository

        > git remote rm origin

3. If you have new repository for new project, you can connect it with

        > git remote add origin ssh://git@codebase.plus4u.net:9422/<new_repository>.git
   Verify with
   
        > git remote -v  

   Always follow the UAF GIT Flow!
      
        VPH-BT:44191587611027055


## 2. IntelliJ code style settings
Configuration XML file for UU Code Style is located in _./config/intellij-java-uuAppg01-style-xx.xml_. It contains IDE settings for unified code style, which is inspired by Google Code Style. Every developer in team should import this settings to prevent inconsistency.

To apply settings:
1. open IntelliJ IDEA
2. go to File - settings (ctrl+alt+s)
3. go to tab Editor - Code Style
4. click on the settings icon next to the Scheme and select Import Scheme - IntelliJ IDEA Code Style XML
5. select xml file from ./config folder and confirm

## 3. Install and run client

1. Change project name
    Edit app.json and change values of attributes name, code, description and vendor. For name use (a-z), number (0-9) and chars (_-.). For code use (A-Z), number (0-9) and chars (_-.).

2. Installation
    Open client folder and execute install in command line:

    > cd <your client folder name e.g. uu_demoappg01_main-client> 
    > npm install

3. Run
    Execute command (in folder *_main-client):

    > npm start

4. In case of developing only client side of application you can open Index in browser - [localhost](http://localhost:1234/)

## 4. Install and run server

1. Mongo DB Installation
    - Download Mongo DB for windows from [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)
    - Execute downloaded executable and choose complete installation.
    - Run command line. Open "C:\Program Files\MongoDB\Server\3.x\bin" and execute

      > mongod.exe

     ! This installation is only for development only !
    - Recommended client is [Robo 3T](https://robomongo.org) for database administration.
    - Documentation with detailed information is available on [Documentation](https://plus4u.net/ues/sesm?SessFree=ues%253AVPH-BT%253AUAFTEMPLATE)


2. Configure server
    - Edit configuration _uu_appg01_main-server/src/main/java/resources/application.properties_ and replace <uuSubAppInstanceSysOwner> with your uuIdentity.
    - Change project properties
       - file _./build.gradle_:  group, version, description and other additional properties marked with TODO
       - file _./settings.gradle_: rootProject.name and included sub-projects names.
    
    - optional: add another sub-project (module)
      - Default project structure is prepared as multi-project. You can easily add another sub-project, which will inherit all settings from build.gradle file in project root.
      - You can create new sub-project in IntelliJ by right clicking on root project - new - module - Gradle/Java or by copying the template project. After that check file _settings.gradle_ if it includes all required sub-projects.

3. Client build

    Make you sure that the client has been built successfully (there is _project_name-server/public_ folder). There are two ways you can do that:

    1. Using npm directly - running command "npm run dist" in the project_name-client folder.
    2. Using gradle task - running command "gradle project_name-client:build" in root folder of the project or running command "gradle build" for building both client and server.

4. Run server

    Make sure Gradle plugin 'uu.appg01' or 'uu.appg01.appserver' is applied to the project (as it adds following Gradle task uuRun - see [uuAppg01 gradle plugin documentation](https://uuos9.plus4u.net/uu-dockitg01-main/78462435-99c939a08e0849c68df5ee339c94054b/book/page?code=uuAppg01GradlePlugin)).

    In project root directory run command
    
    > gradle uuRun
    
    Application starts locally on embedded tomcat on default port 8080 and can be accessed e.g. with browser (http://localhost:8080/uu-demoappg01-main/0-0/home).
    
    _Note that server is built automatically while running the uuRun task so you don't have to run the "gradle build" task explicitly. The build task should be run only if you need to build both - client and server._
    
    _Note that you should be able to access home page. But error will raise after you run any command from demo except /echo. It is due uuAppWorkspace isn't initialized yet. Follow next chapter to do so._

## 5. Using predefined gradle tasks  
1. Compiling project

    In project root directory run command
    
     > gradle classes
    
    All compiled production Java classes with copies of resources can be found in /build folder

2. Running tests

    In project root directory run command
    
     > gradle test
    
    Result of tests can be found in folder /build/reports/tests. It is created in interactive html format.

3. Cleaning project (removes compiled classes and packages)
    In project root directory run command

     > gradle clean
    
4. You can also compile classes, run tests, package project with command

     > gradle build

# uuApp Initialization
! Obtain authentication token from [showToken VUC](https://oidc.plus4u.net/uu-oidcg01-main/0-0/showToken). 
  After login it shows token. This key must be used as Authorization header with value "Bearer <token>" in all following calls.

## 1. Initialize uuAppWorkspace

    Use any rest client and call following call

    POST http://localhost:8080/uu-demoappg01-main/00000000000000000000000000000000-00000000000000000000000000000001/sys/initAppWorkspace
    Request body:
    {
        "awid": "11111111111111111111111111111111",
        "sysOwner": "<uuIdentity>",
        "licenseOwner" : {
            "organization" : {
                "name" : "Unicorn a.s.",
                "oId" : "154156465465162",
                "web" : "http://www.unicorn.com/"
            },
            "userList" : [
                {
                    "uuIdentity" : "1-1",
                    "name" : "Vladimír Kovář"
                }
            ]
        }
    }
    ! Replace <uuIdentity> with your uuIdentity id. 
    Request initialize workspace for demo application.
    
## 2. Configure profiles and permissions

    Use any rest client and call following call

    POST: http://localhost:8080/uu-demoappg01-main/00000000000000000000000000000000-11111111111111111111111111111111/sys/setProfile
    Request body:
    {
        "code": "echo",
        "roleUri": "urn:uu:GGALL"
    }
    Request sets all users to echo profile for public rights.

## 3. Test functionality

   Open Index in browser - [Home](http://localhost:8080/uu-demoappg01-main/00000000000000000000000000000000-11111111111111111111111111111111/home).
   After login, you should see demo content (if uuAppWorkspace wasn't initialized properly, you will see error message).


# uuApp Distribution Package 
## 1. Package creation
  In project root directory run command.
  
   > gradle build war

  The task automatically installs all required npm modules, builds client and server, creates war archive into _project_name-server/build/libs_ folder.
    
## 2. Uploading package into Nexus repository
1. Make sure Gradle plugin 'uu.appg01' or 'uu.appg01.uurepository' is applied to project.
2. Set Nexus repository url in /build.gradle file. (Parameters uuDevReleaseRepository and uuDevSprintRepository)
3. Configure which artifacts should be uploaded. Extension uuPublishArtifacts in _project_name-server/build.gradle file_. Available options are javadoc, sources, tests, testSources and reports.
4. In project root directory run command

   > gradle uuPublish    
    
# Generating dashboard with reports   
Make sure Gradle plugin 'uu.appg01' or 'uu.appg01.uuqa' is applied to project.

In project root directory run command
    
   > gradle uuReport
    
Reports (test, checkstyle, jococo) are created in _./project_name/build/reports_ folder.
Dashboard with all these reports is in folder _./project_name/build/reports/buildDashboard_.

# uuApp Production deployment to C3    
Make sure Gradle plugin 'uu.appg01' or 'uu.appg01.uucloud' is applied to project.
It adds tasks for creating uuAppBox, uploading attachments, deploying to C3, sharing uuApp etc.

Plugin documentation can be found in dockit [uuAppg01 gradle plugin](https://uuos9.plus4u.net/uu-dockitg01-main/78462435-99c939a08e0849c68df5ee339c94054b/book/page?code=uuAppg01GradlePlugin).

# uuService (only server side) development
Note: You can delete this part from application README

1. Delete client directory in main
2. Edit _./settings.gradle_ configuration and remove deleted client from here.
3. Delete _./project_name-server/src/main/java/resources/config/mappings-vuc.json_ configuration 
4. Configure and start server according to chapter "uuApp Local Deployment"

# uuWebside (only client side) development
Note: You can delete this part from application README

1. Delete server directory in root
2. Configure and start client according to chapter "uuApp Local Deployment"
