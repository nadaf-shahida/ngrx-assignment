import { moduleMetadata, Story, Meta } from "@storybook/angular";
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { inputComponent } from "./input.component";

export default{
    component: inputComponent,
    decorators:[
        moduleMetadata({
            declarations: [inputComponent],
            imports: [ CommonModule]
        }),
    ],
    excludeStories: /.*Data$/,
    title: 'Button',
} as Meta;


export const actionData = {
    onButtonChange: action('onButtonChange'),
    onArchiveTask: action('onArchiveTask')
};

const Template: Story<inputComponent> = orgs=>({
    props:{
        onButtonChange: actionData.onButtonChange,
        onArchiveTask: actionData.onArchiveTask,
    },
    
});

export const Default = Template.bind({});

Default.args = {
    task: {
        id: '1',
        title: 'test task',
        state: 'task_inbox',
        updateAt: new Date(2021, 0, 1 , 9, 0),
    }
}
