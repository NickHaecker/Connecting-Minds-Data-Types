import WebSocket from "ws"
import { ConnectingMindsHooks } from "../src/hooks/ConnectingMindsHooks"





export enum ConnectingMindsEvents {
    CONNECT_PLAYER_ONE = "CONNECT_PLAYER_ONE", CONNECT_PLAYER_TWO = "CONNECT_PLAYER_TWO", DISCONNECT_PLAYER_ONE = "DISCONNECT_PLAYER_ONE", DISCONNECT_PLAYER_TWO = "DISCONNECT_PLAYER_TWO", WAIT_FOR_PLAYER_ONE = "WAIT_FOR_PLAYER_ONE", WAIT_FOR_PLAYER_TWO = "WAIT_FOR_PLAYER_TWO",

}
export type Player={
    socket:WebSocket.WebSocket,
    hooks:ConnectingMindsHooks
}