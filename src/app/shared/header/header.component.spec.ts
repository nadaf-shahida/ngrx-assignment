import { ElementRef, Renderer2 } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { AuthLinksComponent } from 'src/app/modules/auth/auth-links/auth-links.component';
import { AuthModule } from 'src/app/modules/auth/auth.module';
import { AuthService } from 'src/app/modules/auth/resources/auth.service';
import { CartLinkWidgetComponent } from 'src/app/modules/cart/cart-link-widget/cart-link-widget.component';
import { MockApiCartService } from 'src/app/modules/cart/resources/mock-api-cart.service';
import { FooterComponent } from '../footer/footer.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule,
                BrowserAnimationsModule,
                RouterTestingModule,
                FormsModule, Store, AuthModule],

      providers: [AuthService, MockApiCartService],

      declarations: [HeaderComponent, AuthLinksComponent, CartLinkWidgetComponent, FooterComponent]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
