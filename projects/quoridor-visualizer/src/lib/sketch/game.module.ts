import p5 from 'p5';
import { Player, Tick } from '../protobuf/match_log';

const ACCENT_COLOR = 144;
const BG_COLOR = 190;
export const COLORS = ['#a02214', '#14c214'];

export class GameModule {
  current!: Tick;
  ctx: p5;

  constructor(
    ctx: p5,
    readonly players: Player[],
    protected boardSize: number,
    protected numOfWalls: number,
    tick: Tick,
  ) {
    this.ctx = ctx;
    this.update(tick);
  }

  protected readonly margin = 50;

  render(): void {
    this.ctx.background(BG_COLOR);

    const size_x = (this.ctx.width - 2 * this.margin) / this.boardSize;
    const size_y = (this.ctx.height - 2 * this.margin) / this.boardSize;
    // Should be equal
    const size = Math.min(size_x, size_y);

    // Draw background
    this.ctx.strokeWeight(4);
    this.ctx.stroke(ACCENT_COLOR);
    this.ctx.fill(ACCENT_COLOR);

    for (let row = 0; row <= this.boardSize; row++) {
      this.ctx.line(
        this.margin,
        this.margin + row * size,
        this.margin + this.boardSize * size,
        this.margin + row * size,
      );
    }

    for (let col = 0; col <= this.boardSize; col++) {
      this.ctx.line(
        this.margin + col * size,
        this.margin,
        this.margin + col * size,
        this.margin + this.boardSize * size,
      );
    }

    this.ctx.strokeWeight(1);
    this.ctx.textSize(16);
    for (let row = 0; row < this.boardSize; row++) {
      this.ctx.text(row, this.margin / 2, this.margin + row * size + size / 2);
    }
    for (let col = 0; col < this.boardSize; col++) {
      this.ctx.text(col, this.margin + col * size + size / 2, this.margin / 2);
    }

    for (let row = 0; row <= this.boardSize; row++) {
      for (let col = 0; col <= this.boardSize; col++) {
        const x = this.margin + col * size;
        const y = this.margin + row * size;
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
      this.ctx.circle(
        this.margin + x * size + size / 2,
        this.margin + y * size + size / 2,
        size / 2 - 4,
      );
    }

    if (this.current.action.oneofKind === 'place') {
      this.drawWall(size, { ...this.current.action.place, who: this.current.currentPlayer }, true);
    } else if (this.current.action.oneofKind === 'move') {
      const { x, y } = this.current.action.move;
      this.ctx.stroke(255);
      this.ctx.noFill();
      this.ctx.strokeWeight(2);
      this.ctx.circle(
        this.margin + x * size + size / 2,
        this.margin + y * size + size / 2,
        size / 2 - 2,
      );
    }
  }

  update(tick: Tick) {
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
    let start_x;
    let start_y;
    let end_x;
    let end_y;

    const wallWidth = 14;

    if (wall.isVertical) {
      start_x = this.margin + size * (wall.x + 1);
      start_y = this.margin + size * wall.y + wallWidth / 2;
      end_x = this.margin + size * (wall.x + 1);
      end_y = this.margin + size * (wall.y + 2) - wallWidth / 2;
    } else {
      start_x = this.margin + size * wall.x + wallWidth / 2;
      start_y = this.margin + size * (wall.y + 1);
      end_x = this.margin + size * (wall.x + 2) - wallWidth / 2;
      end_y = this.margin + size * (wall.y + 1);
    }

    if (highlight) {
      this.ctx.stroke(255);
      this.ctx.strokeWeight(wallWidth + 2);
      this.ctx.line(start_x, start_y, end_x, end_y);
    }

    this.ctx.stroke(COLORS[wall.who]);
    this.ctx.strokeWeight(wallWidth);
    this.ctx.line(start_x, start_y, end_x, end_y);
  }
}
