import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ProductAddComponent } from './product-add.component';

describe('ProductAddComponent', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule,
        BrowserAnimationsModule,
    RouterTestingModule,
      FormsModule],
      declarations: [ProductAddComponent],
      providers: [provideMockStore()],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call onSubmit',
  // fakeAsync(() => {
  //   const loginForm = {
  //     username:  'admin',
  //     email: 'admin@admin.com'
  //   };
  //   component.onSubmit(loginForm);
  // }));


});

