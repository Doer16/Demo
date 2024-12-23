import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  d: string = new Date().toLocaleTimeString();

  timeid = setInterval(() => {
    this.d = new Date().toLocaleTimeString();
  }, 1000)

  isDisabled: boolean = false;
  isHidden: boolean = false;

  isActive: boolean = false;

  applyC1: boolean = true;

  cvar: string = 'blue';

  mystyle: object = {
    color: 'yellow',
    background: 'grey',
    border: '5px solid blue'
  };
  hasError: boolean = true;
} 