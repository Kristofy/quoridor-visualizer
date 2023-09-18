import { TestBed } from '@angular/core/testing';

import { QuoridorVisualizerService } from './quoridor-visualizer.service';

describe('QuoridorVisualizerService', () => {
  let service: QuoridorVisualizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoridorVisualizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
