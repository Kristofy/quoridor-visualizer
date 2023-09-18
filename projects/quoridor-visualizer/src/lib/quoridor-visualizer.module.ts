import { NgModule } from '@angular/core';
import { QuoridorVisualizerComponent } from './quoridor-visualizer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatListModule } from "@angular/material/list";



@NgModule({
  declarations: [
    QuoridorVisualizerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    MatListModule,
  ],
  exports: [
    QuoridorVisualizerComponent
  ]
})
export class QuoridorVisualizerModule { }
