import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { FooterComponent } from './footer.component';

export default {
  title: 'Footer',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [FooterComponent],
      imports: [CommonModule],
    }),
  ],
};

export const HeaderContainer = () => ({
  component: FooterComponent,
  
  template: `
  <app-footer></app-footer>`,

});
