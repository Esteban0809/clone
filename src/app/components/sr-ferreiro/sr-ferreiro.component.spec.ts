import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrFerreiroComponent } from './sr-ferreiro.component';

describe('SrFerreiroComponent', () => {
  let component: SrFerreiroComponent;
  let fixture: ComponentFixture<SrFerreiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrFerreiroComponent]
    });
    fixture = TestBed.createComponent(SrFerreiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
