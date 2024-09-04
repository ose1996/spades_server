import { Schema, Context, type } from "@colyseus/schema";
import { State } from "./State";

export class User extends Schema {

  @type("string") username: string;
  @type(State) state: State;

}
