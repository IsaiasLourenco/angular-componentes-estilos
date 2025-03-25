import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  standalone: false,
  templateUrl: './card-button-cancel.component.html',
  styleUrl: './card-button-cancel.component.scss',
  styles: [
    `
    .card-cancel-button {
      font-size: 16px;
      text-align: center;
      margin-top: 10px;
      border-radius: 25px;
      background-color: blue;
      cursor: pointer;
      font-weight: bold;
      padding: 10px;
    }
    `
  ],
})
export class CardButtonCancelComponent {

}
