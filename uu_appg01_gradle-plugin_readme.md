uu.appg01 gradle plugin for C3 deployment

# Outline
1. About plugin 
2. Plugin build and distribution    
    - Building plugin
    - Uploading plugin to maven repository 
3. Using plugin in project
    - Authorization  
    - Tasks configuration
    - Tasks description

# 1. About plugin 
uu.appg01 plugin adds multiple tasks for deploying and maintaining uuApplications.

Plugin task list:
  - uuAppBox
  - uuCloudDeploy
  - uuCloudUndeploy
  - uuCloudShare
  - uuCloudUnshare
  - uuCloudDeployList
  - uuLogstoreExport

Plugin also adds gradle property 'env' to root gradle project. Value is resolved by plugin depending on project's property 'env'. If not set, default value is 'dev'. 
You can use this variable in build.gradle file to configure different environments.
# Building plugin
In project root directory run command

   > gradle build
       
# Uploading plugin to maven repository 
1. Set Nexus repository url in uploadArchives task defined in build.gradle file.
2. In project root directory run command

   > gradle uploadArchives   
    
# 2. Using plugin in project
build.gradle example

    buildscript {    
      repositories {
        maven { url 'repositoryUrl' }
      }
    
      dependencies {
        classpath("uu.appg01:uu_appg01_gradle-plugin::X.X.X")
      }
    }
    
    apply plugin: 'uu.appg01'
    
# Authorization    
## Using token file
Tasks assume that valid OIDC token is located in ./config/oidc_token.json with following structure

    {
      "id_token": "eyJ0....ZoY"
    }
    
Tasks can be also run with OIDC token in different location. In this case, in project root directory run command

   > gradle taskName -PoidcTokenPath='$CONFIG/oidc_token.json'
    
Valid token can be acquired at [Plus4u OIDC](https://oidc.plus4u.net/uu-oidcg01-main/0-0/showToken?client_id=gradle) 

## Using password file
If you provide valid access codes, plugin can also acquire token from OIDC server automatically.

Access codes must be save in password file with following structure:

    accessCode1=XXX
    accessCode2=YYY
    
Password filename, absolute or relative path is afterwards passed through parameter _passwordFile_:
    
   > gradle taskName -PpasswordFile='uuee'

If filename or relative path is provided, plugin will search for password file in following locations (in this specific order):
- $UU_HOME/
- user.home/.uu
- $HOME/.uu

# Tasks configuration
All tasks working with uuCloud support externalized configuration. It should be saved in ./config/uucloud-deploy-config-{ENV}.json, where ENV distinguishes different environments.

Example of the configuration which contains every supported attribute:

    {
      "uuCloudAppBoxLocationUri": "ues:UU-BT:PRD.UU-APPG01-SERVER-JAVA/APPBOX",
      "uuCloudResourcePoolUri": "ues:DEV0116-BT:DEV",
      "uuCloudDeploymentConfig": {
        "objectStoreUri": "mongodb://<user>:<password>mongo.plus4u.net:27017/<dbname>"
        "uuSubAppInstanceSysOwner": "1-2",
        "tid": "84723967990075193",
        "asid": "b493d99bc97847b1929abe3b41b73333"
      },
      "uuCloudAppBoxUri": "ues:UU-BT:UU.DEMOAPPG01.MAIN/APPBOX-0.1.0-SNAPSHOT",
      "uuCloudAppDeploymentUri": "ues:DEV0116-BT[84723967990075193]:DEV[590ad6f527928911f9d6078d]:UU.DEMOAPPG01.MAIN[598b7fe406dfdf55ae99b2aa]",
      "uuCloudShareTerritories": [
        "ues:84723967990075193-b493d99bc97847b1929abe3b41b73333:84723967990075193-b493d99bc97847b1929abe3b41b73333",
        "ues:84723967990075193-920ebf3f9f3f4a5dabcce0d67f899598:84723967990075193-920ebf3f9f3f4a5dabcce0d67f899598"
      ],
      "uuCloudUnshareTerritories": [
        "ues:84723967990075193-920ebf3f9f3f4a5dabcce0d67f899598:84723967990075193-920ebf3f9f3f4a5dabcce0d67f899598"
      ]
    }
Attributes are described in next chapter in association with tasks which use them.    

After creating configuration json file, you have to tell gradle which configuration should be used. It is done in uuDeploySettings extension of build.gradle file. Example:
    
    uuDeploySettings {
      uuCloudDeployConfig = rootProject.file('config/uucloud-deploy-config-dev.json')
    }
    
# Tasks description
## 1. uuAppBox task
Task creates uuAppBox and uploads required attachments for deployment (WAR archive, deployment descriptor, readme). If uuAppBox already exists, task just updates the attachments.
### Configuration
Configuration of the uuAppBox task is done in config file described in chapter Configuration of tasks. 
Some of the optional parameters must be defined in uuDeploySettings extension of build.gradle file.

Parameters to configure:
- **uuCloudAppBoxLocationUri** (required) - UESURI of the folder where the AppBox will be created. 
- warPath (optional, defined in uuDeploySettings extension) - Absolute path to war file. Default value is taken from output of gradle's war task (_./subProjectName/build/libs/subProjectName-version.war_).
- deployDescriptorPath (optional, defined in uuDeploySettings extension) - Absolute path to deploy descriptor json. Default value is _./subProjectName/src/resources/deploy_descriptor.json_

Name and code of the AppBox and codes of AppBox's attachments are derived from values in deploy descriptor file.
 
### Running the task    
To run uuAppBox task, in project root directory run command

   > gradle uuAppBox

_Note that user running the deploy task has to have interface with uuAppBox MAR (if MAR doesn't exist)._
 
## 2. uuCloudDeploy task
Task deploys uuApp to C3 Cloud and saves uuCloudAppDeploymentUri to configuration json file. (./config/uucloud-deploy-config-{ENV}.json)
### Configuration
Configuration of the uuCloudDeploy task is done in config file described in chapter Configuration of tasks.

Parameters to configure:
- **uuCloudResourcePoolUri** (required) - URI of the pool for which to get deployed applications list. 
- uuCloudAppBoxUri (optional) - URI of uuAppBox to deploy. If not set, task will use uri from task uuAppBox (parameter uuCloudAppBoxLocationUri described in uuAppBox task is then required).

### Running the task    
To run deployment, in project root directory run command

   > gradle uuCloudDeploy

You can also run this task together with uuAppBox task. Plugin ensures that uuAppBox task will run before uuCloudDeploy task.

   > gradle uuAppBox uuCloudDeploy
    
    
## 3. uuCloudUndeploy task
Task undeploys uuApp from C3 Cloud.
### Configuration
Configuration of the task is done in config file described in chapter Configuration of tasks. 

Parameters to configure:
- **uuCloudAppDeploymentUri** (required) - URI of app deployment. This parameter is automatically saved to config json as an output of uuCloudDeploy task.

Alternative way to set appDeploymentUri is through parameter while running the task - see following chapter about running undeploy task.
### Running the task
To run uuCloudUndeploy task, in project root directory run command

   > gradle uuCloudUndeploy

To run uuCloudUndeploy task with explicitly defined appDeploymentUri parameter, in project root directory run command

   > gradle uuCloudUndeploy -PappDeploymentUri='ues:XXX:YYY'

## 4. uuCloudShare task
Task shares the specified app deployment to the given territories.
### Configuration
Configuration of the task is done in config file described in chapter Configuration of tasks. 

Parameters to configure:
- **uuCloudAppDeploymentUri** (required) - URI of app deployment. This parameter is automatically saved to config json as an output of uuCloudDeploy task.
- **uuCloudShareTerritories** (required) - List of territory URIs where application will be shared.

### Running the task    
To run uuApp share, in project root directory run command

   > gradle uuCloudShare
    
To run uuCloudShare task with explicitly defined appDeploymentUri parameter, in project root directory run command

   > gradle uuCloudShare -PappDeploymentUri='ues:XXX:YYY'

You can also run this task together with uuAppBox and/or uuCloudDeploy task. Plugin ensures that uuCloudShare task will run after uuCloudDeploy task.

   > gradle uuAppBox uuCloudDeploy uuCloudShare
    
## 5. uuCloudUnshare task
Task terminates sharing of the specified app deployment for the given territories.
### Configuration
Configuration of the task is done in config file described in chapter Configuration of tasks. 

Parameters to configure:
- **uuCloudAppDeploymentUri** (required) - URI of app deployment. This parameter is automatically saved to config json as an output of uuCloudDeploy task.
- **uuCloudUnshareTerritories** (required) - List of territory URIs from where the app deployment will be unshared.

### Running the task    
To run uuApp unshare, in project root directory run command

   > gradle uuCloudUnshare

To run uuCloudUnshare task with explicitly defined appDeploymentUri parameter, in project root directory run command

   > gradle uuCloudUnshare -PappDeploymentUri='ues:XXX:YYY'
    
You can also run this task together with uuCloudUndeploy. 

   > gradle uuCloudUndeploy uuCloudUnshare
        
## 6. uuCloudDeployList task
Task prints to output list of applications deployed in the given pool.
### Configuration
Configuration of the task is done in config file described in chapter Configuration of tasks. 

Parameters to configure:
- **uuCloudResourcePoolUri** (required) - URI of the pool for which to get deployed applications list. 

### Running the task    
To run the task, in project root directory run command

   > gradle uuCloudDeployList  
     
## 7. uuLogstoreExport task
Task exports a list of records from the specified log to ./build/uuLogstoreExport.log.
### Configuration
Task requires application deployment uri which must be saved in config file (param uuCloudAppDeploymentUri) described in chapter Configuration of tasks. 
Alternative way to set appDeploymentUri is through parameter while running the task - see following subchapter about running uuLogstoreExport task.

Search query can be also restricted with from/to parameter. It is done in uuLogstoreSettings extension of build.gradle file.

Parameters to configure:
- **uuCloudAppDeploymentUri** (required) - URI of app deployment. This parameter is automatically saved to config json as an output of uuCloudDeploy task.
- from (optional, defined in uuLogstoreSettings extension) - Oldest time of time interval to get records for.
- to (optional, defined in uuLogstoreSettings extension) - Newest time of time interval to get application log records for. 

_./build.gradle_ example:

    uuLogstoreSettings {
      from = LocalDateTime.parse("2017-06-22T09:00:00")
      to = LocalDateTime.parse("2017-06-22T10:00:00")
    }
    
### Running the task
To run the task, in project root directory run command

   > gradle uuLogstoreExport

To run the task with explicitly defined appDeploymentUri parameter, in project root directory run command

   > gradle uuLogstoreExport -PappDeploymentUri='ues:XXX:YYY'
