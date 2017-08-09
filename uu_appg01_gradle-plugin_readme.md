uu.appg01 gradle plugin for C3 deployment

# Outline
1. About plugin 
2. Plugin build and distribution    
    - Building plugin
    - Uploading plugin to maven repository 
3. Using plugin in project
    - Authorization  
    - Configuring and running tasks

# 1. About plugin 
uu.appg01 plugin adds multiple tasks for deploying and maintaining uuApplications.

Plugin task list:
  - uuAppBox
  - uuCloudDeploy
  - uuCloudUndeploy
  - uuCloudShare
  - uuCloudUnshare
  - uuLogstoreExport

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
        classpath("uu.appg01.gradle:uu-gradle-plugin:X.X.X-SNAPSHOT")
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
    
Valid token can be acquired at
https://oidc.plus4u.net/uu-oidcg01-main/0-0/showToken?client_id=gradle 

## Using password file
Plugin can also acquire token from OIDC server, if you provide valid access codes.

Access codes must be save in password file with following structure:

    accessCode1=XXX
    accessCode2=YYY
    
Password filename, absolute or relative path is afterwards passed through parameter _passwordFile_:
    
    > gradle taskName -PpasswordFile='uuee'

If filename or relative path is provided, plugin will search for password file in following locations (in this specific order):
- $UU_HOME/
- user.home/.uu
- $HOME/.uu

# Configuring and running Tasks
## 1. uuAppBox task
Task creates uuAppBox and upload required attachments for deployment (war and deployment descriptor). If uuAppBox already exists, task just updates the attachments.
### Configuration
Configuration of the uuAppBox task is done in uuDeploySettings extension of build.gradle file.

Parameters to configure:
- uuDeploySettings.appBoxLocationUri (required) - UESURI of the folder where the AppBox will be created. 
- uuDeploySettings.warPath (optional) - Absolute path to war file. Default value is taken from output of gradle's war task (_./subProjectName/build/libs/subProjectName-version.war_).
- uuDeploySettings.deployDescriptorPath (optional) - Absolute path to deploy descriptor json. Default value is _./subProjectName/src/resources/deploy_descriptor.json_

Name and code of the AppBox and codes of AppBox's attachments are derived from values in deploy descriptor file.

_./build.gradle_ example:

    uuDeploySettings {
      appBoxLocationUri = 'ues:UU-BT:PRD.UU-APPG01-SERVER-JAVA/APPBOX'
    }

_Note that if locations of sub-project's AppBoxes differ (or you want to specify other parameters), extension uuDeploySetting can be also set in sub-project's build.gradle file (eg. ./subProjectName/build.gradle)_   
 
### Running the task    
To run uuAppBox task, in project root directory run command

    > gradle uuAppBox

_Note that user running the deploy task has to have interface with uuAppBox MAR._
 
## 2. uuCloudDeploy task
Task deploys uuApp to C3 Cloud and saves appDepoymentUri to ./build/deploy/app_deployment.json
### Configuration
Configuration of the uuCloudDeploy task is done in uuDeploySettings extension of build.gradle file, same as uuAppBox task.

Parameters to configure:
- uuDeploySettings.resourcePoolUri (required) - URI of the pool for which to get deployed applications list. 
- uuDeploySettings.uuAppBoxUri (optional) - URI of uuAppBox to deploy. If not set, task will use uri from task uuAppBox (parameter uuDeploySettings.appBoxLocationUri described in uuAppBox task is then required).

_./build.gradle_ example:

    uuDeploySettings {
      appBoxLocationUri = 'ues:UU-BT:PRD.UU-APPG01-SERVER-JAVA/APPBOX'
      resourcePoolUri = 'ues:DEV0116-BT:DEV'
    }

### Running the task    
To run deployment, in project root directory run command

    > gradle uuCloudDeploy

You can also run this task together with uuAppBox task. Plugin ensures that uuAppBox task will run before uuCloudDeploy task.

    > gradle uuAppBox uuCloudDeploy
    
    
## 3. uuCloudUndeploy task
### Configuration
Task requires application deployment uri which must be saved in ./build/deploy/app_deployment.json file. This json is output of uuCloudDeploy task, but you can also create it manually.

app_deployment.json structure:

    {
      "appDeploymentUri" : "ues:DEV0116-BT[84723967990075193]:DEV[590ad6f527928911f9d6078d]:UU.DEMOJAVAG01.MAIN[593e6297a95f3e5a7fa47a44]"
    }

Alternative way to set appDeploymentUri is through parameter while running the task - see following chapter about running undeploy task.
### Running the task
To run uuCloudUndeploy task, in project root directory run command

    > gradle uuCloudUndeploy

To run uuCloudUndeploy task with explicitly defined appDeploymentUri parameter, in project root directory run command

    > gradle uuCloudUndeploy -PappDeploymentUri='ues:XXX:YYY'

## 4. uuCloudShare task
### Configuration
Task requires application deployment uri which must be saved in ./build/deploy/app_deployment.json file. This json is output of uuCloudDeploy task, but you can also create it manually (example of this json i provided in description of uuCloudUndeploy task).

Configuration of share territories is done in uuDeploySettings extension of build.gradle file, same as uuAppBox and uuCloudDeploy task.

Parameters to configure:
- uuDeploySettings.shares (required) - Array of tid and awid, where application will be shared. 

_./build.gradle_ example:

    uuDeploySettings {
      shares = [
          ["tid1", "awid1"],
          ["tid2", "awid2"],
          ["tid3", "awid3"]
        ]
    }


### Running the task    
To run uuApp share, in project root directory run command

    > gradle uuCloudShare
    
To run uuCloudShare task with explicitly defined appDeploymentUri parameter, in project root directory run command

    > gradle uuCloudShare -PappDeploymentUri='ues:XXX:YYY'

You can also run this task together with uuAppBox and/or uuCloudDeploy task. Plugin ensures that uuCloudShare task will run after uuCloudDeploy task.

    > gradle uuAppBox uuCloudDeploy uuCloudShare
    
## 4. uuCloudUnshare task
### Configuration
Configuration of the task is same as configuration of uuCloudShare task.

Parameters to configure:
- uuDeploySettings.unshares (required) - Array of tid and awid, where application will be unshared. 

_./build.gradle_ example:

    uuDeploySettings {
      unshares = [
          ["tid1", "awid1"],
          ["tid2", "awid2"],
          ["tid3", "awid3"]
        ]
    }


### Running the task    
To run uuApp unshare, in project root directory run command

    > gradle uuCloudUnshare

To run uuCloudUnshare task with explicitly defined appDeploymentUri parameter, in project root directory run command

    > gradle uuCloudUnshare -PappDeploymentUri='ues:XXX:YYY'
    
You can also run this task together with uuCloudUndeploy. Plugin ensures that uuCloudUnshare task will run after uuCloudUndeploy task.

    > gradle uuCloudUndeploy uuCloudUnshare
        
## 6. uuLogstoreExport task
### Configuration
Task requires application deployment uri which must be saved in ./build/deploy/app_deployment.json file. This json is output of uuCloudDeploy task, but you can also create it manually (example of this json i provided in description of uuCloudUndeploy task).
Alternative way to set appDeploymentUri is through parameter while running the task - see following chapter about running undeploy task.

Search query can be also restricted with from/to parameter. It is done in uuLogstoreSettings extension of build.gradle file.

Parameters to configure:
- uuLogstoreSettings.from (optional) - Oldest time of time interval to get records for.
- uuLogstoreSettings.to (optional) - Newest time of time interval to get application log records for. 

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
