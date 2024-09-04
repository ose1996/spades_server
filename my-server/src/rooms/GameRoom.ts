import { Room, Client } from "@colyseus/core";
import { State } from "./schema/State";
import { Team } from "./schema/Team";
import { User } from "./schema/User";

export class GameRoom extends Room<State> {
  maxClients = 4;

  inGame:Team;
  inGameLobby:User[];
  spectatorLobby:User[];


  onCreate (options: any) {
    this.setState(new State());

    this.onMessage("type", (client, message) => {
      //
      // handle "type" message
      //
    });
  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    if(this.inGameLobby.length < 4) {
      let user = new User();
      this.inGameLobby.push(new User)
    }
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
