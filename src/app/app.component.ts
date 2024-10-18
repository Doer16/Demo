import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data1 = "this is demo of input decorator";
  parr = [10, 40, 60, 70, 80,];
  data2 = "data to header component";
  parr2 = [100, 80, 90, 20, 180,];
}