import { Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';
import { v4 as uuid} from 'uuid'
import { AddCharactersComponent } from '../components/add-characters/add-characters.component';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[]= [{
  id: uuid(),
  name: 'Krilin',
  power: 100
},{
  id: uuid(),
  name: 'Goku',
  power: 9500
},{
  id: uuid(),
  name: 'Vegeta',
  power: 7500

},{
  id: uuid(),
  name: 'Pikoro',
  power: 6500
}];

AddCharacter( Character: Character ): void {

  const newCharacter: Character = { id: uuid(), ...Character };

  this.characters.push( newCharacter );
}

// onDeleteCharacter( index: number ): void {
  // this.characters.splice(index, 1);

  deleteCharacterById(id: string){
    this.characters = this.characters.filter( character => character.id !== id );

  }


}


