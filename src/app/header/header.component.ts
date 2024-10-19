import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() customeve = new EventEmitter();
  message = "passed to parent";

  passToParent() {
    this.customeve.emit(this.message);
  }

  updateMessage(e:any) {
    this.message = e.target.value;
  }
  
}
