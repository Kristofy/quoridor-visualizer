import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoridorVisualizerModule } from 'projects/quoridor-visualizer/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, QuoridorVisualizerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
