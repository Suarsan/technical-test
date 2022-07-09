import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameInitials'
})
export class NameInitialsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value) {
      const limit =  typeof args[0] === 'number' ? args[0] : 2;
      const names = value.split(' ').slice(0, limit);
      let result = '';
      names.forEach((n) => result += n[0]);
      return result;
    }
    return null;
  }

}
