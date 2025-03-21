export enum ConnectingMindsEvents {
  PLACE_ITEM = "PLACE_ITEM",
  ON_PLACE_ITEM = "ON_PLACE_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  ON_REMOVE_ITEM = "ON_REMOVE_ITEM",
  UNLOCK_ITEM = "UNLOCK_ITEM",
  ON_UNLOCK_ITEM = "ON_UNLOCK_ITEM",
  UNLOCK_PATH = "UNLOCK_PATH",
  ON_UNLOCK_PATH = "ON_UNLOCK_PATH",
  LOCK_PATH = "LOCK_PATH",
  ON_LOCK_PATH = "ON_LOCK_PATH",
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
  SEND_MESSAGE = "SEND_MESSAGE",
  PREVIEW_ITEM = "PREVIEW_ITEM",
  ON_PREVIEW_ITEM = "ON_PREVIEW_ITEM",
  START_QUEST = "START_QUEST",
  SOLVE_QUEST = "SOLVE_QUEST",
  ON_START_QUEST = "ON_START_QUEST",
  ON_SOLVE_QUEST = "ON_SOLVE_QUEST",
  UNLOCK_HINT = "UNLOCK_HINT",
  ON_UNLOCK_HINT = "ON_UNLOCK_HINT",
  SYNCHRONIZE_ITEM = "SYNCHRONIZE_ITEM",
  ON_SYNCHRONIZE_ITEM = "ON_SYNCHRONIZE_ITEM"
}

export enum MessageType {
  ERROR = "ERROR", INFO = "INFO", WARNING = "WARNING"
}

export type ItemProxy = {
  _id: string;
  Name: string;
  ID: string;
  Description: string;
  Type: string
};

export type PositionProxy = number[]

export type QuestProxy = {
  Quest: Quest
}

export type Quest = {
  _id: string,
  ID: string,
  Name: string,
  Description: string,
  Solved: boolean
}

export type PlaceItemProxy = {
  Item: ItemProxy
  Position: PositionProxy
  Slot?: string
}


export type UseItemProxy = {
  Item: ItemProxy,
  Position: PositionProxy
}

export type PreviewItemProxy = {
  Item: ItemProxy,
  State: boolean
}
export type UnlockItemProxy = {
  Item: ItemProxy
}
export type UnlockHintProxy = {
  Hint: ItemProxy
}

export type SynchronizeItemnProxy = {
  Item: ItemProxy,
  Position: PositionProxy
}

export type SynchronizedItemnProxy = {
  PlacedItems: PlaceItemProxy[]
}

export type UnlockPathProxy = {
  Path: PathProxy
}
export type LockPathProxy = {
  Path: PathProxy
}

export type UnlockedPathProxy = {
  Paths: PathProxy[]
}
export type LockedPathProxy = {
  Paths: PathProxy[]
}

export type PathProxy = {
  _id: string,
  ID: string,
  Name: string,
  Type: string
}

export type RemoveItemProxy = {
  Item: ItemProxy
}

export type SolveQuestProxy = {
  Quests: Quest[]
}

export type StartQuestProxy = {
  Quests: Quest[]
}

export type PlacedItemProxy = {
  AvailableItems: ItemProxy[];
  PlacedItems: PlaceItemProxy[];
  PreviewdItem: ItemProxy | null
}

export type RemovedItemProxy = {
  AvailableItems: ItemProxy[];
  PlacedItems: PlaceItemProxy[];
}

export type PreviewdItemProxy = {
  AvailableItems: ItemProxy[];
  PreviewdItem: ItemProxy | null
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

export type UnlockedItemProxy = {
  PlacedItems: PlaceItemProxy[],
}
export type UnlockedHintProxy = {
  AvailableItems: ItemProxy[]
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