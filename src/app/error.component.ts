import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="error-container">
      <h3 class="error-text">Page Does not exists</h3>
    </div>
  `,
  styles: `
  .error-container {
    widtth: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-self: center;
  }
  `,
})
export class ErrorComponent {}
