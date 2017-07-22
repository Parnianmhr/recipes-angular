import { Component } from '@angular/core';

@Component({
  selector:'app-warning',
  template: `
    <p>This is a warning alert!</p>
  `,
  styles: [`
    p {
      background-color: mistyrose;
      border: 1px solid red;
      padding: 15px;
    }
  `]
})

export class WarningAlertComponent {

}
