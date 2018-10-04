import { Component, OnInit, Input } from '@angular/core';
import { ICity } from '../city/city';
import { PointsOfInterestService } from './points-of-interest.service';
import { IPointOfInterest } from './point-of-interest';

@Component({
  selector: 'pm-points',
  templateUrl: './point-of-interest.component.html',
  styleUrls: ['./point-of-interest.component.css']
})
export class PointOfInterestComponent implements OnInit {
  points: IPointOfInterest[];
  @Input() cityId: number;
  constructor(private pointsOfInterestService: PointsOfInterestService ) { }

  ngOnInit() {
      this.points = [{
        "Name": "Ana",
        "Description": "PPP",
      },
      { 
        "Name": "BnB",
      "Description": "BBB",
    }];

    this.pointsOfInterestService.getData(this.cityId).subscribe(
      points => {
        this.points = points;
      },
      error => { console.log("Error on retriving cities:" + error); }
    );
  }

}
