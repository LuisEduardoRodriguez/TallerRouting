import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliografiaSinopsisComponent } from './bibliografia-sinopsis.component';

describe('BibliografiaSinopsisComponent', () => {
  let component: BibliografiaSinopsisComponent;
  let fixture: ComponentFixture<BibliografiaSinopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliografiaSinopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliografiaSinopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
