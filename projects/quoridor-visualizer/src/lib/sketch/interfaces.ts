export interface JsonLog {
  init: JsonInit;
  ticks: JsonTick[];
}

export interface JsonInit {
  players: JsonPlayer[];
  boardSize: number;
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
}

export interface JsonWall {
  x: number;
  y: number;
  isVertical: number;
  who: number;
}

export interface JsonBot {
  id: number;
  received: JsonMessage[];
  sent: JsonMessage[];
  error?: string | null;
  botLog?: string | null;
  offline?: true;
}

export type JsonAction =
  | {
      type: 'move';
      x: number;
      y: number;
    }
  | {
      type: 'place';
      x: number;
      y: number;
      isVertical: number;
    };

export interface JsonMessage {
  message: string;
  timestamp: number | null;
}

export interface JsonPlayer {
  id: string;
  name: string;
}
