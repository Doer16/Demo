import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter: number = 0;
  name = "xyz";

  increment() {
    return this.counter += 1;
  }
  decrement() {
    return this.counter -= 1;
  }

  changeName(e: any) {
    this.name = e.target.value;
  }

}