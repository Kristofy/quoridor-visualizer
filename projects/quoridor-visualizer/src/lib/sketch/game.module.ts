import * as p5 from 'p5';
import { JsonBoard, JsonPlayer, JsonTick, JsonWall } from './interfaces';

const ACCENT_COLOR = 144;
const BG_COLOR = 190;
const COLORS = ['#a02214', '#14c214'];

export class GameModule {
  players: JsonPlayer[];
  board: JsonBoard;
  numOfWalls: number;
  current!: JsonTick;
  ctx: p5;
  constructor(
    ctx: p5,
    players: JsonPlayer[],
    board: JsonBoard,
    numOfWalls: number,
    tick: JsonTick,
  ) {
    this.ctx = ctx;
    this.players = players;
    this.board = board;
    this.numOfWalls = numOfWalls;
    this.update(tick);
  }

  render(): void {
    this.ctx.background(BG_COLOR);

    const size_x = this.ctx.width / this.board.cols;
    const size_y = this.ctx.height / this.board.rows;
    // Should be equal
    const size = Math.min(size_x, size_y);

    // Draw background
    this.ctx.strokeWeight(4);
    this.ctx.stroke(ACCENT_COLOR);
    this.ctx.fill(ACCENT_COLOR);

    for (let row = 0; row <= this.board.rows; row++) {
      this.ctx.line(0, row * size, this.ctx.width, row * size);
    }

    for (let col = 0; col <= this.board.cols; col++) {
      this.ctx.line(col * size, 0, col * size, this.ctx.height);
    }

    for (let row = 0; row <= this.board.rows; row++) {
      for (let col = 0; col <= this.board.cols; col++) {
        const x = col * size;
        const y = row * size;
        this.ctx.circle(x, y, 8);
      }
    }
    // Draw placed walls

    for (let wall of this.current.walls) {
      const { x, y, isVertical, who } = wall;

      const start_x = size * (x + (isVertical ? 1 : 0));
      const start_y = size * (y + (isVertical ? 0 : 1));

      const end_x = size * (x + 1 + (isVertical ? 0 : 1));
      const end_y = size * (y + 1 + (isVertical ? 1 : 0));

      this.ctx.stroke(COLORS[who]);

      this.ctx.strokeWeight(14);
      this.ctx.line(start_x, start_y, end_x, end_y);
    }

    // Draw pawns
    for (let i = 0; i < this.current.pawnPos.length; i++) {
      this.ctx.fill(COLORS[i]);
      this.ctx.stroke(20);
      this.ctx.strokeWeight(2);

      const { x, y } = this.current.pawnPos[i];
      this.ctx.circle(x * size + size / 2, y * size + size / 2, size / 2 - 4);
    }

    if (this.current.action.type === 'place') {
      const { type, x, y, isVertical } = this.current.action;
      const who = this.current.currentPlayer;

      const start_x = size * (x + (isVertical ? 1 : 0));
      const start_y = size * (y + (isVertical ? 0 : 1));

      const end_x = size * (x + 1 + (isVertical ? 0 : 1));
      const end_y = size * (y + 1 + (isVertical ? 1 : 0));

      this.ctx.stroke(255);
      this.ctx.strokeWeight(16);
      this.ctx.line(start_x, start_y, end_x, end_y);

      this.ctx.stroke(COLORS[who]);
      this.ctx.strokeWeight(14);
      this.ctx.line(start_x, start_y, end_x, end_y);
    } else if (this.current.action.type === 'move') {
      const { type, x, y } = this.current.action;
      this.ctx.stroke(255);
      this.ctx.noFill();
      this.ctx.strokeWeight(2);
      this.ctx.circle(x * size + size / 2, y * size + size / 2, size / 2 - 2);
    }
  }

  update(tick: JsonTick) {
    this.current = tick;
  }
}
