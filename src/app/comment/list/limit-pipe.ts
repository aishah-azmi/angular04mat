import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name : 'LimitPipe'})
export class LimitPipe implements PipeTransform {
  transform(value: string): any {
    if(!value){  //undefined is null
      return value;
    }
    console.log(value.length)

    if (value.length > 10) {
      //do somthing here
      return value.substr(0, 10).concat('...');
    } else {
      return value;
    }
  }
}
