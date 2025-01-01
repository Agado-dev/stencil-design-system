import { create } from '@storybook/theming';
import { addons } from '@storybook/manager-api';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Agado Dev components',
    brandUrl: 'https://agado.dev',
    brandImage: '/agado-logo.svg',
  }),
});
