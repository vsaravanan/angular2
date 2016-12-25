import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
  
})

export class NgswitchComponent  {
  viewMode= 'map';
  courses = ['Course 1', 'Course 2', 'Course 3'];

  book = {
    title: 'Angular 2 for Beginners',
    rating: 4.9745,
    students: 5981,
    price: 99.95,
    releaseDate: new Date(2016, 3, 1)
  };
}
