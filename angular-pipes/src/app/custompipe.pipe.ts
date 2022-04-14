import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class CustompipePipe implements PipeTransform {
  nvalue;
  transform(value: any, ...args: any[]): any {
    this.nvalue = value.split('').reverse().join('');
    return this.nvalue;
  }

}
