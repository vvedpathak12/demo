import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  test1 : string = "Angular pipes";
  test2 : string = "This is testing of multiple pipes";
  test3 : string ="Angular";
  test4 : string = "angular";
  person = {
    fname : "Tony",
    lname : "Stark",
    age :42,
  }

  date = new Date ;

  salary = 50000 ;

  ngOnInit(): void {
  }

}
