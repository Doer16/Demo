import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  person1 = { "name": "chinni", "gender": "f" };
  person2 = { "name": "rajamouli", "gender": "m" };
  wish = "good evening";
}