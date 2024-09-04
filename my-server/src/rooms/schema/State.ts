import { Schema, Context, type } from "@colyseus/schema";

export class State extends Schema {

  @type("string") room: string;

}
