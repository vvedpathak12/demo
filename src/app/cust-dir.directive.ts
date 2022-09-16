import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustDir]'
})
export class CustDirDirective {

  constructor(private ele : ElementRef ) { 
    this.ele.nativeElement.style.background = "grey";
    this.ele.nativeElement.style.color = "yellow";
    this.ele.nativeElement.style.padding = "25px";
    this.ele.nativeElement.style.border = "15px solid red";
  }

}
