/* tslint:disable */
/* auto-generated angular directive proxies */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
} from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@agado/components';

import { defineCustomElement as defineAdButton } from '@agado/components/components/ad-button.js';
import { defineCustomElement as defineAdLink } from '@agado/components/components/ad-link.js';
@ProxyCmp({
  defineCustomElementFn: defineAdButton,
  inputs: ['disabled', 'label', 'size', 'type', 'variant'],
})
@Component({
  selector: 'ad-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'size', 'type', 'variant'],
  standalone: true,
})
export class AdButton {
  protected el: HTMLAdButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pressAndHold']);
  }
}

export declare interface AdButton extends Components.AdButton {
  pressAndHold: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  defineCustomElementFn: defineAdLink,
  inputs: ['href', 'text', 'type'],
})
@Component({
  selector: 'ad-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href', 'text', 'type'],
  standalone: true,
})
export class AdLink {
  protected el: HTMLAdLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface AdLink extends Components.AdLink {}
