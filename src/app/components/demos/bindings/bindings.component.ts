import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent {

  title: string = 'Jeremy, stop râler, pls.'
  enabled: boolean = false;

  changeMe() {
    this.title = 'Bastien fais nous des animations de fou, pls.'
  }

  disableMe() {
    this.title = 'Marc aime le jeu d\'échecs';
    this.enabled = !this.enabled;
  }
}
