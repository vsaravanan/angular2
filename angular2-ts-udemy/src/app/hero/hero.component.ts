import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
})


export class Hero {
  constructor(
    public id: number,
    public name: string) { }
}

@Component({
  selector: 'app-hero-view',
  template: `
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
      </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many heroes!</p>

    <button (click)="onClickMe()">Click</button>
    {{clickMessage}}

  <!-- <input (keyup)="onKey($event)">
   <p>{{values}}</p> -->
  <p></p>
  <input #box (keyup)="onKey2(box.value)" value=".">
  <p>{{values}}</p>

<!--
   <input #box2 (keyup.enter)="onEnter(box2.value)">
   <p>{{value}}</p> -->

    <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">

    <button (click)=addHero(newHero.value)>Add to the list</button>

    <ul><li *ngFor="let hero of heroes2">{{hero}}</li></ul>


	`
})


export class HeroComponent {

  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0]; 

  clickMessage = '';

  values = '';

	value = '';

  onClickMe() {
    this.clickMessage = 'clicked!';
  }

  onKey(event:any) { // without type info
    //this.values += (<HTMLInputElement>event.target).value + ' | ';
    this.values += event.target.value + ' | ';  
  }  

  onKey2(value: string) {
    this.values += value + ' | ';
  }

  onEnter(value: string) { 
  	this.value = value; 
  }  

	heroes2 = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  addHero(newHero: string) {
    if (newHero) {
      this.heroes2.push(newHero);
    }
  }

}