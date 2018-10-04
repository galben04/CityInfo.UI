import { Component, OnInit } from "@angular/core";
import { ICity } from "./city";
import { Alert } from "selenium-webdriver";
import { CitiesService } from "./cities.service";
import { PointOfInterestComponent } from "../point-of-interest/point-of-interest.component";

@Component({
    selector: 'pm-cities',
    templateUrl: './city-list.component.html',
})
export class CityListComponent implements OnInit  {
    cities: ICity[];
    isAttractionShowed: boolean;
    test: number;

    constructor(private citiesService: CitiesService) {}

    ngOnInit(): void {
        this.cities = [{
            "Name": "Bucuresti",
            "Description": "Capitala Romaniei",
            "Id": 1    
        }];

        this.isAttractionShowed = false;
        
        this.citiesService.getCities().subscribe(
            cities => {
                this.cities = cities;
            },
            error => { console.log("Error on retriving cities:" + error); }
        );
    }

    private AttractionsClicked() {
        this.isAttractionShowed = !this.isAttractionShowed;      
    }
}