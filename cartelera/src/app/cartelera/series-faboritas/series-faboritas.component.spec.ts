import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesFaboritasComponent } from './series-faboritas.component';

describe('SeriesFaboritasComponent', () => {
  let component: SeriesFaboritasComponent;
  let fixture: ComponentFixture<SeriesFaboritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesFaboritasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesFaboritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
