import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custpipe'
})
export class CustpipePipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //  console.log(value);
  //  console.log(args);
  //  let res = value /10;
  //  return res;
  //  return value / args[0];
  // }

  // transform(value: any, ...args: any[]): any {
  //  console.log(value);
  //  console.log(args);
  //  let result = 55 + value + args[0];
  //  return result;
   
  // }
  
  // transform (value: string): string {
  //   let str = value.split("").reverse().join("");
  //   return str ;
  // }

  // transform (value: string): string {
  //   let str = value.replace("Angular" , "aNgUlAr");
  //   return str ;
  // }

  // transform (value: string , ...args: string []) : unknown {
  //   const str = value.split("");
  //   for (var i = 1 ; i < str.length ; i++)
  //     if (i % 2 === 0) {
  //       str[0] = str[0].toLowerCase();
  //     }
  //     else{
  //       str[i] = str[i].toUpperCase();
  //     }
  //   return str.join("");
  // }


  transform (FirstName: string , ...LastName:string[]): string {
     return FirstName + " " + LastName.join(' ') ;
  }

}
