/**
 * Extensions
 */
import {Uri} from "uu_appg01_core"
import {Client} from "uu_appg01"
import {Session} from "uu_oidcg01"

let Calls = {

  call:function(method, url, params, dtoIn){
    Client[method](url, params).then(
      function(response){
        dtoIn.done(response.data);
      }, function(response){
        dtoIn.done({ data: response.data });
      }
    );
  },

  authorizeVuc:function(dtoIn){
    Session.initPromise.then(
      function(){
        let uri = location.protocol + "//" + location.host + location.pathname;
        Client.get(uri).then(
          function(response){
            dtoIn.done(response);
          }, function(response){
            let errorCode = ((response.error||{}).detail||{}).code;
            // if (response.status == 401 || errorCode == "UU.APPWORKSPACE/SYSPERMISSION/E001") { // user is not authorized => use standard error route
              dtoIn.done({
                data: {
                  status: "200",
                  profiles: []
                }
              });
            // } else { // unknown error
            //   dtoIn.fail(response);
            // }
          }
        )
      }
    )
  },

  getAppConfig:function(dtoIn){
    let commandUri = Calls.getCommandUri('getAppWorkspaceConfig');
    Calls.call("get", commandUri, null, dtoIn);
  },

  getCommandUri:function(aUseCase) { // useCase <=> "/getSomething" or "/sys/getSomething"
    let useCase = (!aUseCase.startsWith("/") ? "/" + aUseCase : aUseCase);
    let baseUri = location.protocol + "//" + location.host + location.pathname;
    let uriBuilder = Uri.UriBuilder.parse(baseUri).setUseCase(useCase);
    return uriBuilder.toUri();
  },

  loadHello: function (dtoIn) {
    let commandUri = Calls.getCommandUri("greetings");

    Calls.call('post', commandUri, null, dtoIn);
  }

};

export default Calls;
