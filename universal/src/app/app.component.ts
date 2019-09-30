import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  number = 0;
  
  setNumber() {
    this.number = this.number + 1;
  }
}
