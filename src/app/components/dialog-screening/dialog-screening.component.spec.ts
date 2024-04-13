import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogScreeningComponent } from './dialog-screening.component';

describe('DialogScreeningComponent', () => {
  let component: DialogScreeningComponent;
  let fixture: ComponentFixture<DialogScreeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogScreeningComponent]
    });
    fixture = TestBed.createComponent(DialogScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
