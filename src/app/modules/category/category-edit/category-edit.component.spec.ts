import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryApiService } from '../resources/category-api.service';

import { CategoryEditComponent } from './category-edit.component';

describe('CategoryEditComponent', () => {
  let component: CategoryEditComponent;
  let fixture: ComponentFixture<CategoryEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        BrowserModule,
       BrowserAnimationsModule,
       FormsModule],

      declarations: [CategoryEditComponent],
      // providers: [CategoryApiService, { provide: ActivatedRoute, useValue: null }]

      // providers: [{ provide: ActivatedRoute, useClass: MockActivatedRoute }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
