/**
 * Server calls of application client.
 */
import {Uri} from "uu_appg01_core"
import {Client} from "uu_appg01"
import {Session} from "uu_oidcg01"

let Calls = {

  call(method, url, dtoIn) {
    Client[method](url, dtoIn.data).then(
      (response) => {
        console.log(response);
        dtoIn.done(response.data)
      },
      response => dtoIn.fail(response)
    );
  },

  loadDemoContent(dtoIn) {
    let commandUri = Calls.getCommandUri('loadDemoContent');
    Calls.call("get", commandUri, dtoIn);
  },

  getCommandUri(aUseCase) { // useCase <=> "/getSomething" or "/sys/getSomething"
    let useCase = (!aUseCase.match(/^\//) ? "/" + aUseCase : aUseCase);
    let baseUri = location.protocol + "//" + location.host + location.pathname;
    let uriBuilder = Uri.UriBuilder.parse(baseUri).setUseCase(useCase);
    return uriBuilder.toUri();
  }

};

export default Calls;
