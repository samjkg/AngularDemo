import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {

  @Output() banCharacter: EventEmitter<number> = new EventEmitter<number>();

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() ranked: number = 0;
  @Input() win: number = 0;
  @Input() defeat: number = 0;

  ban(idCharacterInChild: number) {
    this.banCharacter.emit(idCharacterInChild)
  }
}
