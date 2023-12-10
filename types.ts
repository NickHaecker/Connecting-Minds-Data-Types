export enum ConnectingMindsEvents {
  CONNECT_PLAYER_ONE = "CONNECT_PLAYER_ONE",
  CONNECT_PLAYER_TWO = "CONNECT_PLAYER_TWO",
  DISCONNECT_PLAYER_ONE = "DISCONNECT_PLAYER_ONE",
  DISCONNECT_PLAYER_TWO = "DISCONNECT_PLAYER_TWO",
  WAIT_FOR_PLAYER = "WAIT_FOR_PLAYER_ONE",
  WAIT_FOR_WATCHER = "WAIT_FOR_PLAYER_TWO",
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
  FINISHED_INDEXING = "FINISHED_INDEXING",
  GET_ITEMS = "GET_ITEMS",
  ON_GET_ITEMS = "ON_GET_ITEMS",
  GET_POSITIONS = "GET_POSITIONS",
  ON_GET_POSITIONS = "ON_GET_POSITIONS",

  ON_UNLOCK_POSITION = "ON_UNLOCK_POSITION",
  CREATE_SESSION = "CREATE_SESSION",
  ON_CREATE_SESSION = "ON_CREATE_SESSION",
  CONNECT_TO_SESSION = "CONNECT_TO_SESSION",
  LEAVE_SESSION = "LEAVE_SESSION",
  ON_CONNECT_TO_SESSION = "ON_CONNECT_TO_SESSION",
  SESSION_NOT_FOUND = "SESSION_NOT_FOUND",
  NOT_IN_SESSION="NOT_IN_SESSION",
  SESSION_IS_OCCUPIED = "SESSION_IS_OCCUPIED",
  ON_INIT_PLAYER = "ON_INIT_PLAYER",
  INIT_PLAYER = "INIT_PLAYER",
  INIT_WATCHER = "INIT_WATCHER",
  ON_INIT_WATCHER = "ON_INIT_WATCHER",
  NO_WATCHER = "NO_WATCHER",
  WATCHER_IS_CONTAINING = "WATCHER_IS_CONTAINING",
  MISSING = "MISSING",
  CONNECT_PLAYER = "CONNECT_PLAYER",
  DISCONNECT_PLAYER = "DISCONNECT_PLAYER",
  WATCHER_EXISTING = "WATCHER_EXISTING",
  ON_JOIN_SESSION = "ON_JOIN_SESSION",
  ON_LEAVE_SESSION = "ON_LEAVE_SESSION",
  SEND_MESSAGE = "SEND_MESSAGE",
  ROTATE_ITEM = "ROTATE_ITEM",
  WRONG_PLAYER="WRONG_PLAYER",
  WRONG_WATCHER="WRONG_WATCHER"
}

export type Item = {
  _id: string;
  Name: string;
  Description: string;
};
export type PlacedItem = {
  Item: Item;
  Position: Position
}
export type Position = {
  _id: string;
  Name: string;
  ID: string;
};
export type FilesToIndex = {
  IndexType: string;
  DataToIndex: any[];
};
export type Path = {
  _id: string;
  Name: string;
  Description: string
}
export type CreateSession = {
  Type: string
}

export type PlaceItemProxy = {
  AvailablePositions: Position[];
  AvailableItems: Item[];
  PlacedItems: PlacedItem[];
}
export type RemoveItemProxy = {
  AvailablePositions: Position[];
  AvailableItems: Item[];
  PlacedItems: PlacedItem[];
}
export type UnlockedPath = {
  Path: Path;
  Positions: Position[]
}
export type UnlockPathProxy = {
  AvailablePositions: Position[];
  UnlockedPaths: Path[];
}
export type UnlockItemProxy = {
  AvaibaleItems: Item[]
}
export type UnlockPositionProxy = {
  AvailablePositions: Position[]
}
export type ConnectToSession = {
  Type: string,
  SessionID: string
}
export type LeaveSession = {
  Type: string
}