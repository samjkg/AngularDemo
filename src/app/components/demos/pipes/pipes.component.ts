import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
    upper: string = 'Aujourd\'hui on va McDo';
    lower: string = 'AVEC GAVIIIIIIIIIIIIIIN ❤️';
    dateDuJour: Date = new Date();
    tempC: number = 0;
    tempF: number = 0;
}
