import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';

import { ProductViewComponent } from './product-view.component';

describe('ProductViewComponent', () => {
  let component: ProductViewComponent;
  let fixture: ComponentFixture<ProductViewComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        FormsModule, Store],
     declarations: [ProductViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
