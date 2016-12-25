import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.css'],
  templateUrl: './app.component.html'
})

export class AppComponent {

  title  = 'Main page';
  imageUrl = '';
  isActive = true;


  post = {
    isFavorite: true
  };

  //imageUrl = 'http://www.w3schools.com/images/w3schools_green.jpg';

  onDivClick() {
    console.log('Div click event');
  }

  onClick($event) {
    $event.stopPropagation();
    console.log('clicked', $event);
  }

  onFavoriteChange($event) {
    console.log($event);
  }

}
