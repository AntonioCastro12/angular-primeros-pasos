import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "ironMan";
  public age: number = 45;


  get capitalizedName(): String{
    return this.name.toUpperCase();


  }

 getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'Spiderman';

  }

  changeAge():void {
    this.age = 25;
  }

  resetForm():void {
    this.name = "ironMan";
    this.age = 45;
  }


}

