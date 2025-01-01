import { fn } from '@storybook/test';
import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import { type AdButton } from './ad-button.component.js';
import { AD_BUTTON_SIZES, AD_BUTTON_VARIANTS } from './ad-button.model.js';

export default {
  title: 'Components/AdButton',
  component: 'ad-button',
  argTypes: {
    variant: {
      control: 'select',
      options: AD_BUTTON_VARIANTS,
    },
    size: {
      control: 'select',
      options: AD_BUTTON_SIZES,
    },
  },
  args: {
    onclick: fn(),
    pressAndHold: fn(),
  },
  render: args => html`<ad-button
    label=${args.label}
    variant=${args.variant}
    size=${args.size}
    @click=${args.onclick}
    @pressAndHold=${args.pressAndHold}>
  </my-form>`,
} as Meta;
type AdButtonStoryType = StoryObj<AdButton>;

export const Examples = {
  render: () => html`<div>
    <h1>Button Examples</h1>
    <div style="display: flex; flex-direction:column; gap: 1rem;">
      <ad-button label="Primary Button" variant="primary" size="large"></ad-button>
      <ad-button label="Secondary Button" variant="secondary" size="large"></ad-button>
      <ad-button label="Tertiary Button" variant="alternate" size="large"></ad-button>
      <ad-button label="Disabled Button" variant="primary" disabled></ad-button>
      <ad-button label="Small Button" variant="primary" size="small"></ad-button>
    </div>
  </div>`,
};

export const Primary: AdButtonStoryType = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'large',
  },
};
export const Secondary: AdButtonStoryType = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'large',
  },
};
export const Alternate: AdButtonStoryType = {
  args: {
    label: 'Tertiary Button',
    variant: 'alternate',
    size: 'large',
  },
};
export const Disabled: AdButtonStoryType = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};
export const SmallPrimary: AdButtonStoryType = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'small',
  },
};
