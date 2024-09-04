import { Schema, Context, type } from "@colyseus/schema";

export class Card extends Schema {

  @type("string") suit: string;
  
}
