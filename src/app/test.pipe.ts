import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  //transform(value: unknown, ...args: unknown[]): unknown {    // ...args is called rest parameters, meaning this function can accept n number of arguments
  //console.log(args);
  transform(value: string, param1: string, param2:string ): string {    // ...args is called rest parameters, meaning this function can accept n number of arguments
    console.log(value);
    console.log(param1);
    console.log(param2);

    return "Hello";
  }

}
