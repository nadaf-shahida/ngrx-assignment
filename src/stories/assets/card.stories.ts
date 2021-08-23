import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CardComponent } from 'src/app/card/card.component';
//import { withNotes } from '@storybook/addon-notes';
// import { CardComponent } from '../../card/card.component';

storiesOf('Card', module)
  .add('empty', () => ({
    component: CardComponent,
    props: {}
  }))
  .add('with title', () => ({
    component: CardComponent,
    props: {
      title: 'This is card'
    }
  }))
  .add('with title and subtitle', () => ({
    component: CardComponent,
    props: {
      title: 'Card Title',
      subtitle: 'Card subtitle'
    }
  }))
  //   .add(
  //     'with notes',
  //     withNotes('Card information here...')(() => ({
  //       component: CardComponent,
  //       props: {}
  //     }))
  //   )
  .add('with action', () => ({
    component: CardComponent,
    props: {
      title: 'A card...',
      subtitle: 'Waiting to be clicked-on',
      btnClicked: action('Button clicked')
    }
  }));