import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  data = "this is demo component communication";

  demo() {
    return "Hello";
  }
  
  newData = "xyz";
}
