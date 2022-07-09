import { Pipe, PipeTransform } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';

@Pipe({
  name: 'filterByCompanyName'
})
export class FilterByCompanyNamePipe implements PipeTransform {

  transform(values: readonly CustomerModel[], ...args: unknown[]): readonly CustomerModel[] {
    values = values.filter(v => v.company.name.toLowerCase() === (args[0] as string).toLowerCase());
    return values;
  }

}
