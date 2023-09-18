import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoridorVisualizerComponent } from './quoridor-visualizer.component';

describe('QuoridorVisualizerComponent', () => {
  let component: QuoridorVisualizerComponent;
  let fixture: ComponentFixture<QuoridorVisualizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoridorVisualizerComponent]
    });
    fixture = TestBed.createComponent(QuoridorVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
