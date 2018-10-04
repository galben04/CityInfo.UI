import { Component, OnInit } from '@angular/core';
import { MenuItems } from './menuItems';

@Component({
  selector: 'ng-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuItems =  MenuItems.items;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
