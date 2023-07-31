import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeNewReadersComponent } from './welcome-new-readers.component';

describe('WelcomeNewReadersComponent', () => {
  let component: WelcomeNewReadersComponent;
  let fixture: ComponentFixture<WelcomeNewReadersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeNewReadersComponent]
    });
    fixture = TestBed.createComponent(WelcomeNewReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
