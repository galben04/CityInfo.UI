import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  /*templateUrl: `
  <ul class='nav nav-pills'>
          <li><a class='nav-link' [routerLink]="['/cities']">Cities</a></li>
  </ul>
  
  <router-outlet></router-outlet>
  `,*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'City Info';
}
