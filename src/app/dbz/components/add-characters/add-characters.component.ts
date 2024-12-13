import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'app-dbz-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrl: './add-characters.component.css'
})
export class AddCharactersComponent {

  @Output()
  public oneNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {

    name: '',
    power: 0,

  }

  emitCharacter(): void {
    console.log(this.character)

    if (this.character.name. length === 0) return;

    this.oneNewCharacter.emit(this.character);

    // this.character.name = '';//Esto limpia los espacios del formulario
    // this.character.power = 0;// Y esto regresa a cero

    this.character= {name: '', power: 0};
  }

}
