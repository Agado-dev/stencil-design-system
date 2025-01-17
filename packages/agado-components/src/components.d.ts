/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AdButtonSizeType, AdButtonVariantType } from "./components/ad-button/ad-button.model";
import { AdLinkType } from "./components/ad-link/ad-link.model";
export { AdButtonSizeType, AdButtonVariantType } from "./components/ad-button/ad-button.model";
export { AdLinkType } from "./components/ad-link/ad-link.model";
export namespace Components {
    interface AdButton {
        "disabled": boolean;
        "label": string;
        "size": AdButtonSizeType;
        "type": 'button' | 'submit' | 'reset';
        "variant": AdButtonVariantType;
    }
    interface AdLink {
        "href": string;
        "text": string;
        "type": AdLinkType;
    }
}
export interface AdButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAdButtonElement;
}
declare global {
    interface HTMLAdButtonElementEventMap {
        "pressAndHold": void;
    }
    interface HTMLAdButtonElement extends Components.AdButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAdButtonElementEventMap>(type: K, listener: (this: HTMLAdButtonElement, ev: AdButtonCustomEvent<HTMLAdButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAdButtonElementEventMap>(type: K, listener: (this: HTMLAdButtonElement, ev: AdButtonCustomEvent<HTMLAdButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAdButtonElement: {
        prototype: HTMLAdButtonElement;
        new (): HTMLAdButtonElement;
    };
    interface HTMLAdLinkElement extends Components.AdLink, HTMLStencilElement {
    }
    var HTMLAdLinkElement: {
        prototype: HTMLAdLinkElement;
        new (): HTMLAdLinkElement;
    };
    interface HTMLElementTagNameMap {
        "ad-button": HTMLAdButtonElement;
        "ad-link": HTMLAdLinkElement;
    }
}
declare namespace LocalJSX {
    interface AdButton {
        "disabled"?: boolean;
        "label": string;
        "onPressAndHold"?: (event: AdButtonCustomEvent<void>) => void;
        "size"?: AdButtonSizeType;
        "type"?: 'button' | 'submit' | 'reset';
        "variant": AdButtonVariantType;
    }
    interface AdLink {
        "href": string;
        "text": string;
        "type"?: AdLinkType;
    }
    interface IntrinsicElements {
        "ad-button": AdButton;
        "ad-link": AdLink;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ad-button": LocalJSX.AdButton & JSXBase.HTMLAttributes<HTMLAdButtonElement>;
            "ad-link": LocalJSX.AdLink & JSXBase.HTMLAttributes<HTMLAdLinkElement>;
        }
    }
}
