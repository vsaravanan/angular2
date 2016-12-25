import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likeit',
  templateUrl: './likeit.component.html',
  styles: [`
    .glyphicon-star {
      color: orange;
    }  
    .glyphicon-heart {
        cursor: pointer;
    } 
    .highlighted {
        color: deeppink;
    } 
    .highlightedmenu {
        color: yellow;
    }  
    .vote-button {
      cursor: pointer;
    }       
  `]
})
export class LikeitComponent  {
  @Input('is-favorite') isFavorite: boolean = false;

  @Input() isLiked = false;
  @Input() counter = 7;
  @Input() voter= 13;
  @Input() voterTouched = 0;


  @Output() change = new EventEmitter();

  onFavorite() {
    this.isFavorite = ! this.isFavorite;

    // use this this.change.emit 
    // when you want to use onFavoriteChange() function
    // create onFavoriteChange() as well
    // it is referred in app.component.html
    //this.change.emit({newValue: this.isFavorite});
  }


  onClick($event) {
    let ctrl = $event.target.id;
    console.log(ctrl);

    switch (ctrl) {

      case 'myheart' :
        this.isLiked = ! this.isLiked;
        this.counter += this.isLiked ? 1 : -1;
        break;
      case 'menuup' :
        if ( this.voterTouched <= 0 ) {
          this.voterTouched++;
          this.voter++;
        }
        break;
      case 'menudown' :
        if ( this.voterTouched >= 0 ) {
          this.voterTouched--;
          this.voter--;
        }
        break;
    }
  }

}
