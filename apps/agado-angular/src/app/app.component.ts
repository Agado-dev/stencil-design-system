import { AdButton, AdLink } from '@agado/angular/components';
import { Component } from '@angular/core';

import '@agado/components/design-tokens.css';

@Component({
  selector: 'app-root',
  imports: [AdButton, AdLink],
  template: `
    <header>
      <h1>Angular Stencil POC</h1>
    </header>
    <main class="main">
      <ad-button
        variant="primary"
        label="Click me"
        (click)="handleClick()"
        (pressAndHold)="handleLongPress($event)"
      ></ad-button>

      <ad-link href="https://agado.dev" text="Agado" type="external"></ad-link>
    </main>
  `,
})
export class AppComponent {
  handleClick() {
    console.log('Button clicked');
  }

  handleLongPress(_event: CustomEvent<void>) {
    console.log('Button press and held');
  }
}
