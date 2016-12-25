import { Component } from '@angular/core';

@Component({
  selector: 'app-handlenull',
  templateUrl: './handlenull.component.html',
  styleUrls: ['./handlenull.component.css']
})
export class HandlenullComponent {
  task = {
    title: 'Review applications',
    assignee: null
  }
}
