import { Component } from '@angular/core';
import { jsonstring } from './test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public jsonstring = jsonstring;
  public bot_id = JSON.parse(jsonstring).init.players[0].id;
}
