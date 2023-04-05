import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'placeprep';
  name = 'aquib'

  x = 20;
  y = this.x + 2;
}
