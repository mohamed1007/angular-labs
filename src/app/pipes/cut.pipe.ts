import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut',
  standalone: true
})
export class CutPipe implements PipeTransform {

  transform(number:number): string {
    const formattedNumber = String(number).replace(/\D/g, ''); 
    const chunks = formattedNumber.match(/.{1,4}/g); 
    if (chunks) {
        return chunks.join(' - '); 
    } else {
        return '';
    }
  }

}
