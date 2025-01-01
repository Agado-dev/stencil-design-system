import { Meta, StoryObj } from '@storybook/web-components';
import { AdLink } from './ad-link.component';
import { AD_LINK_TYPES } from './ad-link.model';
import { html } from 'lit';

export default {
  title: 'Components/AdLink',
  component: 'ad-link',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    type: {
      control: 'select',
      options: AD_LINK_TYPES,
    },
    href: { control: 'text' },
    text: { control: 'text' },
  },
} as Meta;

type AdLinkStoryType = StoryObj<AdLink>;

export const Examples = {
  render: () => html`<div>
    <h1>Link Examples</h1>
    <div style="display: flex; flex-direction:column; gap: 1rem;">
      <ad-link type="default" href="#" text="This is a link"></ad-link>
      <ad-link type="external" href="https://example.com" text="A Link"></ad-link>
    </div>
  </div>`,
};

export const Default: AdLinkStoryType = {
  args: {
    type: 'default',
    href: '#',
    text: 'This is a link',
  },
};

export const External: AdLinkStoryType = {
  args: {
    type: 'external',
    href: 'https://example.com',
    text: 'A Link',
  },
};
