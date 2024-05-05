import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mobiles = [
    {
      "id": 2,
      "name": "One Plus Nord",
      "price": 25000,
      "ram": "8gb",
      "storage":"128gb"
    },
    {
      "id": 3,
      "name": "Samsung Galaxy M55",
      "price": 26500,
      "ram": "6gb",
      "storage":"128gb"
    },
    {
      "id": 5,
      "name": "real me 5",
      "price": 20000,
      "ram": "8gb",
      "storage":"128gb"
    }
  ];
}
