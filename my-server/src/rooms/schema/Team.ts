import { Schema, Context, type } from "@colyseus/schema";
import { User } from "./User";

export class Team extends Schema {

    users: User[];

}
