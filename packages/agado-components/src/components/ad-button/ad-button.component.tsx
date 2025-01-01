import { Component, Event, Prop, h, EventEmitter } from '@stencil/core';
import { AdButtonSizeType, AdButtonVariantType } from './ad-button.model';

@Component({
  tag: 'ad-button',
  styleUrl: 'ad-button.css',
  shadow: true,
})
export class AdButton {
  @Prop() label!: string;
  @Prop() variant!: AdButtonVariantType;
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop() disabled: boolean = false;
  @Prop() size: AdButtonSizeType = 'medium';

  @Event() pressAndHold: EventEmitter<void>;

  private holdTimeout: number | undefined;

  private handleMouseDown = () => {
    this.holdTimeout = window.setTimeout(() => {
      this.pressAndHold.emit();
    }, 500);
  };

  private handleMouseUp = () => {
    clearTimeout(this.holdTimeout);
  };

  private getClassName() {
    return `button ${this.variant} ${this.size}`;
  }

  render() {
    return (
      <button
        class={this.getClassName()}
        type={this.type}
        disabled={this.disabled}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseUp}
      >
        {this.label}
      </button>
    );
  }
}
