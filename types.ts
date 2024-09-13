export enum ConnectingMindsEvents {
  PLACE_ITEM = "PLACE_ITEM",
  ON_PLACE_ITEM = "ON_PLACE_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  UNLOCK_ITEM = "UNLOCK_ITEM",
  UNLOCK_PATH = "UNLOCK_PATH",
  INDEX_DATA = "INDEX_DATA",
  ON_INDEX_DATA = "ON_INDEX_DATA",
  FINISHED_INDEXING = "FINISHED_INDEXING",
  INDEXING_STEP_FORWARD = "INDEXING_STEP_FORWARD",
  CREATE_SESSION = "CREATE_SESSION",
  ON_CREATE_SESSION = "ON_CREATE_SESSION",
  JOIN_SESSION = "JOIN_SESSION",
  ON_JOIN_SESSION = "ON_JOIN_SESSION",
  SESSION_NOT_FOUND = "SESSION_NOT_FOUND",
  NOT_IN_SESSION = "NOT_IN_SESSION",
  SESSION_IS_OCCUPIED = "SESSION_IS_OCCUPIED",
  ON_INIT_PLAYER = "ON_INIT_PLAYER",
  INIT_PLAYER = "INIT_PLAYER",
  INIT_WATCHER = "INIT_WATCHER",
  ON_INIT_WATCHER = "ON_INIT_WATCHER",
  WATCHER_IS_CONTAINING = "WATCHER_IS_CONTAINING",
  MISSING = "MISSING",
  LEAVE_SESSION = "LEAVE_SESSION",
  ON_LEAVE_SESSION = "ON_LEAVE_SESSION",
  ROTATE_ITEM = "ROTATE_ITEM",
  WRONG_PLAYER = "WRONG_PLAYER",
  WRONG_WATCHER = "WRONG_WATCHER",
  SAVE_SESSION = "SAVE_SESSION",
  SAVE_FAILED = "SAVE_FAILED",
  SEND_MESSAGE = "SEND_MESSAGE"



}

export type ItemProxy = {
  _id: string;
  Name: string;
  ID: string;
  Description: string;
  Type: string
};


export type PlaceItemProxy = {
  Item: ItemProxy;
  Position: number[]
}

export type PlacedItemProxy = {
  AvailableItems: ItemProxy[];
  PlacedItems: PlaceItemProxy[];
}

export type FilesToIndex = {
  IndexType: string;
  DataToIndex: any[];
};

export type CreateSession = {
  Type: string
}
export type SessionProxy = {
  ID: string;
  Name: string;
}

export type UnlockItemProxy = {
  AvaibaleItems: ItemProxy[]
}

export type ConnectToSession = {
  Type: string,
  SessionID: string
}
export type LeaveSession = {
  Type: string
}
export enum EClientType {
  PLAYER = "PLAYER",
  WATCHER = "WATCHER",
}

export type ClientType = {
  Type: EClientType;
};
export enum SessionStatus {
  ACTIVE = "ACTIVE", PLAYER_MISSING = "PLAYER_MISSING", WATCHER_MISSING = "WATCHER_MISSING", INACTIVE = "INACTIVE"
}