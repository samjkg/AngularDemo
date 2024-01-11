import { Component } from '@angular/core';

interface test {
  msg: string,
  id: string
}
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  messages: test[]  = [
    {msg: 'text', id: 'jesuislid'},
    {msg: 'salut', id: 'coucou'}
  ];
  coucou: boolean = false;

  isCoucou() {
    this.coucou = !this.coucou;
  }
}
