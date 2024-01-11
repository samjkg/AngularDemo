import { Component } from '@angular/core';

interface ILeaderboard {
  id: number,
  name: string,
  ranked: number,
  win: number,
  defeat: number
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  listTopCharacters: ILeaderboard[] = [
    {id: 1, name: 'Shadowheart', ranked: 1, win: 100, defeat: 0},
    {id: 2, name: 'Darwin (X-MEN)', ranked: 2, win: 98, defeat: 2},
    {id: 3, name: 'Vegeta', ranked: 3, win: 90, defeat: 10},
    {id: 4, name: 'Spiderman', ranked: 4, win: 85, defeat: 15},
    {id: 5, name: 'Don Flamingo', ranked: 5, win: 72, defeat: 28},
    {id: 6, name: 'Scarlet Witch', ranked: 6, win: 60, defeat: 40},
    {id: 7, name: 'Doom Slayer', ranked: 7, win: 59, defeat: 41},
    {id: 8, name: 'Gul\'Dan', ranked: 8, win: 50, defeat: 50},
    {id: 9, name: 'Edward Elricht', ranked: 9, win: 37, defeat: 63},
    {id: 10, name: 'Chris', ranked: 10, win: 20, defeat: 80},
    {id: 11, name: 'L\'art de la France', ranked: 11, win: 2, defeat: 98},
    {id: 12, name: 'Batman', ranked: 12, win: 0, defeat: 100},
  ];

  banCharacters(idCharacterInParent: number) {
    this.listTopCharacters = this.listTopCharacters.filter((character) => {
      if (character.id === idCharacterInParent) {
        return false;
      }
      return true;
    })
  }
}
