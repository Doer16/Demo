import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city = "Hyderabad";

  movies = ['RRR', 'Bheemla Nayak', 'Pushpa', 'asrshs'];
}
