import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMiddleComponent } from './ui-middle.component';

describe('UiMiddleComponent', () => {
  let component: UiMiddleComponent;
  let fixture: ComponentFixture<UiMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMiddleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
