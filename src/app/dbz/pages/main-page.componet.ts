import { Component, OnInit } from '@angular/core';
import { Character } from '../interface/character.interface';
import { DbzService } from '../services/dbz.service';
import { AddCharactersComponent } from '../components/add-characters/add-characters.component';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private DbzService: DbzService) {}

  get AddCharacters(): Character[] {

    return [...this.DbzService.characters]

  }

  onDeleteCharacter( id: string): void {
    this.DbzService.deleteCharacterById(id);
  }

  onNewCharacter( characters: Character){
    this.DbzService.AddCharacter(characters);
  }

}
