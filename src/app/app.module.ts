import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CityListComponent } from 'src/app/city/city-list.component';
import {TableModule} from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MultiSelectModule } from 'primeng/multiselect';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import { MenuComponent } from './menu/Menu.component'; 
import {HttpClientModule} from '@angular/common/http';
import { PointOfInterestComponent } from './point-of-interest/point-of-interest.component';
import {DataViewModule} from 'primeng/dataview';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    MenuComponent,
    PointOfInterestComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    TabMenuModule,
    HttpClientModule,
    DataViewModule,
    RouterModule.forRoot([
      {path: 'cities', component: CityListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
