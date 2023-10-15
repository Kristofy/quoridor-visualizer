import p5 from 'p5';
import { JsonPlayer, JsonTick } from './interfaces';

const ACCENT_COLOR = 144;
const BG_COLOR = 190;
const COLORS = ['#a02214', '#14c214'];

export class GameModule {
  current!: JsonTick;
  ctx: p5;

  constructor(
    ctx: p5,
    readonly players: JsonPlayer[],
    protected boardSize: number,
    protected numOfWalls: number,
    tick: JsonTick,
  ) {
    this.ctx = ctx;
    this.update(tick);
  }

  render(): void {
    this.ctx.background(BG_COLOR);

    const size_x = this.ctx.width / this.boardSize;
    const size_y = this.ctx.height / this.boardSize;
    // Should be equal
    const size = Math.min(size_x, size_y);

    // Draw background
    this.ctx.strokeWeight(4);
    this.ctx.stroke(ACCENT_COLOR);
    this.ctx.fill(ACCENT_COLOR);

    for (let row = 0; row <= this.boardSize; row++) {
      this.ctx.line(0, row * size, this.ctx.width, row * size);
    }

    for (let col = 0; col <= this.boardSize; col++) {
      this.ctx.line(col * size, 0, col * size, this.ctx.height);
    }

    for (let row = 0; row <= this.boardSize; row++) {
      for (let col = 0; col <= this.boardSize; col++) {
        const x = col * size;
        const y = row * size;
        this.ctx.circle(x, y, 8);
      }
    }
    // Draw placed walls

    for (const wall of this.current.walls) {
      this.drawWall(size, wall, false);
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
      this.drawWall(size, { ...this.current.action, who: this.current.currentPlayer }, true);
    } else if (this.current.action.type === 'move') {
      const { x, y } = this.current.action;
      this.ctx.stroke(255);
      this.ctx.noFill();
      this.ctx.strokeWeight(2);
      this.ctx.circle(x * size + size / 2, y * size + size / 2, size / 2 - 2);
    }
  }

  update(tick: JsonTick) {
    this.current = tick;
  }

  protected drawWall(
    size: number,
    wall: {
      x: number;
      y: number;
      isVertical: number;
      who: number;
    },
    highlight: boolean,
  ) {
    const start_x = size * (wall.x + (wall.isVertical ? 1 : 0));
    const start_y = size * (wall.y + (wall.isVertical ? 0 : 1));

    const end_x = size * (wall.x + (wall.isVertical ? 1 : 2));
    const end_y = size * (wall.y + (wall.isVertical ? 2 : 1));

    if (highlight) {
      this.ctx.stroke(255);
      this.ctx.strokeWeight(16);
      this.ctx.line(start_x, start_y, end_x, end_y);
    }

    this.ctx.stroke(COLORS[wall.who]);
    this.ctx.strokeWeight(14);
    this.ctx.line(start_x, start_y, end_x, end_y);
  }
}
