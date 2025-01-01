import { Component, Prop, h } from '@stencil/core';
import { ExternalLink } from 'lucide-static';
import { AdLinkType } from './ad-link.model';

@Component({
  tag: 'ad-link',
  styleUrl: 'ad-link.css',
  shadow: true,
})
export class AdLink {
  @Prop() type: AdLinkType = 'default';
  @Prop() href!: string;
  @Prop() text!: string;

  render() {
    return (
      <a href={this.href} target={this.type === 'external' ? '_blank' : '_self'} rel="noopener noreferrer">
        {this.text}
        {this.type === 'external' && <span class="icon" innerHTML={ExternalLink}></span>}
      </a>
    );
  }
}
