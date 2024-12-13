import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interface/character.interface';
import { string32 } from 'pdfjs-dist/types/shared/util';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
  name: 'Trunk',
  power: 10
 }]

//  onDeleteId

@Output()
public onDelete: EventEmitter<string> = new EventEmitter()


 onDeleteCharacter( id: string): void{

  this.onDelete.emit( id );
 }

}
