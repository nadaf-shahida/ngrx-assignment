import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { LoginComponent } from './login.component';
import { MockApiCartService } from '../../cart/resources/mock-api-cart.service';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

export default {
  title: 'Login',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [LoginComponent],
      imports: [CommonModule, Store,
        BrowserModule,
        BrowserAnimationsModule,
    RouterTestingModule,
      FormsModule],
      providers: [MockApiCartService]

    }),
  ],
};

export const HeaderContainer = () => ({
  component: LoginComponent,
  template: `
  <app-login></app-login>`,

});
