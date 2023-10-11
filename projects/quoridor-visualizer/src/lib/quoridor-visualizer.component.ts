import { Component, Input, OnChanges } from '@angular/core';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import * as p5 from 'p5';
import { GameModule } from './sketch/game.module';
import { BotMessageBundle } from './sketch/message';
import { JsonBoard, JsonInit, JsonLog, JsonPlayer, JsonTick } from './sketch/interfaces';

@Component({
  selector: 'lib-quoridor-visualizer',
  templateUrl: './quoridor-visualizer.component.html',
  styleUrls: ['./quoridor-visualizer.component.scss'],
})
export class QuoridorVisualizerComponent implements OnChanges {
  @Input() public jsonstring!: string;
  @Input() public bot_id!: string;

  public selectedPlayer!: { id: string; index: number };

  public left_arrow = faAngleLeft;
  public right_arrow = faAngleRight;
  public start_arrow = faAngleDoubleLeft;
  public end_arrow = faAngleDoubleRight;
  public pause_icon = faPause;
  public star_icon = faPlay;
  public messages: BotMessageBundle | null = null;
  public game?: GameModule;

  private last_set_time = 0;
  public time = 0;
  public last = 0;
  public isAnimating = false;
  public fps = 3;

  private instance?: p5;
  private last_time = 0;
  private accFrameTime = 0;

  ticks: JsonTick[] = [];

  private jsonLog?: JsonLog;

  compareSelectedPlayers(player1?: { id: string }, player2?: { id: string }) {
    return !!(player1 && player2 && player1.id == player2.id);
  }

  onSelectedPlayerChanged() {
    this.messages = new BotMessageBundle(this.ticks[this.time].bots[this.selectedPlayer.index]);
  }

  onTickChanged(new_tick: number | null): void {
    let selected_tick: number = new_tick ?? this.time;
    selected_tick = Math.min(selected_tick, this.last);
    selected_tick = Math.max(selected_tick, 0);
    this.time = selected_tick;
    this.animateEndButtonClickedEvent();
    this.instance?.redraw();
  }

  onTickInputLostFocus(): void {
    // TODO(Kristofy): There is a bug, that when the input loses focus after deleting the value, the user cannot see, that the value is still the last valid value
    // let tmp = this.time;
    // this.onTickChanged(this.last_time);
    // this.onTickChanged(tmp);
  }

  nextButtonClickedEvent(): void {
    if (this.time < this.last) this.time++;
    this.animateEndButtonClickedEvent();
    this.instance?.redraw();
  }

  prevButtonClickedEvent(): void {
    if (this.time > 0) this.time--;
    this.animateEndButtonClickedEvent();
    this.instance?.redraw();
  }

  restartButtonClickedEvent(): void {
    this.time = 0;
    this.animateEndButtonClickedEvent();
    this.instance?.redraw();
  }

  endButtonClickedEvent(): void {
    this.time = this.last;
    this.instance?.redraw();
  }

  animateStartButtonClickedEvent(): void {
    this.isAnimating = true;
    this.accFrameTime = 0;
    this.last_time = window.performance.now();
    this.instance?.loop();
  }

  animateEndButtonClickedEvent(): void {
    this.isAnimating = false;
    this.instance?.noLoop();
  }

  fpsInputEvent(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.fps = parseFloat(element.value) ?? 1;
  }

  private sketch(ctx: p5): void {
    let scale: number;
    let backgroundImage: p5.Image;
    let last_tick = -1;
    const board_size = 600;

    ctx.setup = () => {
      const { init, ticks }: { init: JsonInit; ticks: JsonTick[] } = (this.jsonLog = JSON.parse(
        this.jsonstring,
      ));
      const {
        players,
        board,
        numOfWalls,
      }: { players: JsonPlayer[]; board: JsonBoard; numOfWalls: number } = init;

      const clientHeight =
        document.querySelector<HTMLDivElement>('#container')?.clientHeight ?? 600;
      const clientWidth = document.querySelector<HTMLDivElement>('#canvas')?.clientWidth ?? 800;
      const wratio = clientWidth / board_size;
      const hratio = clientHeight / board_size;
      const min_ratio = Math.min(wratio, hratio);
      const new_board_size = min_ratio * board_size;

      const C = ctx.createCanvas(new_board_size, new_board_size);
      ctx.scale(min_ratio);
      C.parent('canvas');

      this.ticks = ticks;
      this.last = this.ticks.length - 1;

      // this.players = players.map((player) => ({ ...player, planetImagePath: Player.getPlanetImagePath(player.index) }));

      this.game = new GameModule(ctx, players, board, numOfWalls, ticks[0]);
      const selectedPlayerIndex = players.findIndex((player) => player.id === this.bot_id);
      if (selectedPlayerIndex < 0) throw new Error('Specified bot id not present in match log');
      this.selectedPlayer = { id: this.bot_id, index: selectedPlayerIndex };
      ctx.textAlign(ctx.CENTER, ctx.CENTER);
    };

    ctx.draw = () => {
      if (!this.game) {
        throw new Error('this.game not initialized');
      }
      if (this.isAnimating) {
        const currentTime = window.performance.now();
        const deltaTime = window.performance.now() - this.last_time;
        this.last_time = currentTime;

        this.accFrameTime += deltaTime / 1000;

        const d = Math.floor(this.accFrameTime * this.fps);
        this.accFrameTime = this.accFrameTime - d / this.fps;
        this.time = Math.min(this.time + d, this.last);
      }

      if (this.time <= this.last && this.time >= 0) {
        ctx.scale(scale);
        ctx.background(backgroundImage ?? '#000000');
        this.game.update(this.ticks[this.time]);
        this.ticks[this.time]?.bots[this.selectedPlayer.index];
        this.game.render();
        if (last_tick != this.time) {
          this.messages = new BotMessageBundle(
            this.ticks[this.time].bots[this.selectedPlayer.index],
          );
        }
        last_tick = this.time;
      }

      if (this.time == this.last && this.isAnimating) {
        this.isAnimating = false;
      }
    };

    ctx.windowResized = function () {
      const clientHeight =
        document.querySelector<HTMLDivElement>('#container')?.clientHeight ?? 600;
      const clientWidth = document.querySelector<HTMLDivElement>('#canvas')?.clientWidth ?? 800;
      const wratio = clientWidth / board_size;
      const hratio = clientHeight / board_size;
      const min_ratio = Math.min(wratio, hratio);
      ctx.scale(min_ratio);
    };
  }

  ngOnChanges(): void {
    if (this.jsonstring) {
      this.instance = new p5(this.sketch.bind(this));
    }
  }
}
