import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationButtonsWidgetComponent } from './pagination-buttons-widget.component';

describe('PaginationButtonsWidgetComponent', () => {
  let component: PaginationButtonsWidgetComponent;
  let fixture: ComponentFixture<PaginationButtonsWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationButtonsWidgetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationButtonsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
