import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'angular react javascript';
  name1 = 'angular';
  salary = 67000;
  person1 = {
    'name': "xyz",
    'age': 26,
    'salary': 68000
  };
  dob = new Date();
  num = 0.98;
  company = "microsoft";
}