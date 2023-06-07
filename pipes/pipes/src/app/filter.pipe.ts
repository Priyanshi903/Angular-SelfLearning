import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // propName:propertyname, value is array
  transform(value: any, filterstring: string, propName: string): any {
    if (value.length === 0 || filterstring === '') {
      return value
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterstring) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
