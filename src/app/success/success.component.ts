import { Component } from '@angular/core';

@Component({
  selector:'app-success',
  template: `
    <p>This is a success alert!</p>
  `,
  styles: [`
    p {
      background-color: palegreen;
      border: 1px solid green;
      padding: 15px;
    }
  `]
})

export class SuccessAlertComponent {

}
