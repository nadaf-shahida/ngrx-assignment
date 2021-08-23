import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { PriceFilterWidgetComponent } from './price-filter-widget.component';

describe('PriceFilterWidgetComponent', () => {
  let component: PriceFilterWidgetComponent;
  let fixture: ComponentFixture<PriceFilterWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PriceFilterWidgetComponent],
      imports: [RouterTestingModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceFilterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
