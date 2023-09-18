export interface JsonLog {
  init: JsonInit;
  ticks: JsonTick[];
}

export interface JsonInit {
  players: JsonPlayer[];
  board: JsonBoard;
  numOfWalls: number;
}

export interface JsonTick {
  currentPlayer: number;
  pawnPos: JsonPawnPos[];
  walls: JsonWall[];
  ownedWalls: number[];
  action: JsonAction;
  bots: JsonBot[];
}

export interface JsonPawnPos {
  x: number;
  y: number;
};

export interface JsonWall {
  x: number;
  y: number;
  isVertical: boolean;
  who: number;
};

export interface JsonBot {
  id: number;
  received: JsonMessage[];
  sent: JsonMessage[];
  commandError?: string | null;
  botLog?: string | null;
  offline?: true;
}

export interface JsonAction {
  type: string;
  x: number;
  y: number;
  isVertical?: string;
};

export interface JsonMessage {
  message: string;
  timestamp: number | null;
}

export interface JsonBoard {
  rows: number;
  cols: number;
}

export interface JsonPlayer {
  id: number;
  name: string;
}
