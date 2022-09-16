import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  //ngIf loop:-
  public age : number = 20;
  public age1 : number = 18;
  public age2 : number = 17;
  showData : boolean = true;
  showData1 : boolean = false;

  //ngFor loop:-

  streams : any = ["Mechanical" , "IT" , "Civil" , "Entc" , "Computer"];

  //ngSwitchCase:-
  num : any =5;

  fruits :any =" strawberry";

  //Attribute directive :-

  myClass1 : any = "test1";
  myClass2 : any = "test2";
  myClass3 : any = "";
  myStyle : any = {'color' :'black' , 'font-size' : '50px' , 'font-weight' : '800' , 'background-color' : 'cyan' , 'border-radius' : '30px' ,'border' : '2px solid black' , 'padding' : '20px'};
  result : boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.age2 >= 17){
      this.myClass3 = "test4";
    }else {this.myClass3 = "test3";}

  }
  

  

}
