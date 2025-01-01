/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@agado/components';

import { defineCustomElement as defineAdButton } from '@agado/components/components/ad-button.js';
import { defineCustomElement as defineAdLink } from '@agado/components/components/ad-link.js';


export const AdButton = /*@__PURE__*/ defineContainer<JSX.AdButton>('ad-button', defineAdButton, [
  'label',
  'variant',
  'type',
  'disabled',
  'size',
  'pressAndHold'
], [
  'pressAndHold'
]);


export const AdLink = /*@__PURE__*/ defineContainer<JSX.AdLink>('ad-link', defineAdLink, [
  'type',
  'href',
  'text'
]);

