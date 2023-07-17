import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackspageComponent } from './trackspage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TrackspageComponent', () => {
  let component: TrackspageComponent;
  let fixture: ComponentFixture<TrackspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, TrackspageComponent]
})
      .compileComponents();

    fixture = TestBed.createComponent(TrackspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
