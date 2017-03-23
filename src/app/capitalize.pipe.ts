import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return "";
    if(value.length === 0) return "";
    
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
