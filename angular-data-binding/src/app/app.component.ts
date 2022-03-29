import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-data-binding';

  hello = 'Hello World';
  class = 'centered';
  jina = 'name';

  onSubmit() {
    alert('Welcome ' + this.jina + "!");
  }

}
