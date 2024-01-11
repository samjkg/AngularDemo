import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformNumToString'
})
export class TransformNumToStringPipe implements PipeTransform {

  transform(value: number): string {
    const nombresEnLettres = ['Un', 'Deux', 'Trois', 'Quatre', 'Cinq'];
    return nombresEnLettres[value-1];
  }

}
