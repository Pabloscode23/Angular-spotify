import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TracksService } from './tracks.service';

describe('TracksService', () => {
  let service: TracksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TracksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
