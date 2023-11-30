import WebSocket from "ws";
import { ConnectingMindsHooks } from "../src/hooks/connectingMindsHooks";

export enum ConnectingMindsEvents {
  CONNECT_PLAYER_ONE = "CONNECT_PLAYER_ONE",
  CONNECT_PLAYER_TWO = "CONNECT_PLAYER_TWO",
  DISCONNECT_PLAYER_ONE = "DISCONNECT_PLAYER_ONE",
  DISCONNECT_PLAYER_TWO = "DISCONNECT_PLAYER_TWO",
  WAIT_FOR_PLAYER_ONE = "WAIT_FOR_PLAYER_ONE",
  WAIT_FOR_PLAYER_TWO = "WAIT_FOR_PLAYER_TWO",
  PLACE_ITEM = "PLACE_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  UNLOCK_ITEM = "UNLOCK_ITEM",
  SAVE_ITEMS = "SAVE_ITEMS",
  SAVE_POSITIONS = "SAVE_POSITIONS",
  LOAD_ITEMS = "LOAD_ITEMS",
  LOAD_POSITION = "LOAD_POSITION",
  UNLOCK_POSITION = "UNLOCK_POSITION",
  UNLOCK_PATH = "UNLOCK_PATH",
  UPDATE_ITEM = "UPDATE_ITEM",
  ON_PLACE_ITEM = "ON_PLACE_ITEM",
  ON_UNLOCK_ITEM = "ON_UNLOCK_ITEM",
  ON_CONNECT_PLAYER_ONE = "ON_CONNECT_PLAYER_ONE",
  ON_CONNECT_PLAYER_TWO = "ON_CONNECT_PLAYER_TWO",
  ON_REMOVE_ITEM = "ON_REMOVE_ITEM",
  ON_UNLOCK_PATH = "ON_UNLOCK_PATH",
  ON_LOAD_ITEM = "ON_LOAD_ITEM",
  ON_LOAD_POSITION = "ON_LOAD_POSITION",
  ON_UPDATE_ITEM = "ON_UPDATE_ITEM",
  INDEX_DATA = "INDEX_DATA",
  ON_INDEX_DATA = "ON_INDEX_DATA",
  TEST = "TEST",
  FINISHED_INDEXING = "FINISHED_INDEXING"
}

export class Player {
  public socket: WebSocket.WebSocket;
  public hooks: ConnectingMindsHooks
  constructor(socket: WebSocket.WebSocket, hooks: ConnectingMindsHooks) {
    this.socket = socket
    this.hooks = hooks
  }
}

export type Item = {};
export type FilesToIndex = {
  IndexType: string;
  DataToIndex: any[];
};
