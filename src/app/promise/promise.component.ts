import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor( private ser2 : DataService) { }

  ngOnInit(): void {
    const prom = new Promise (function (resolve , reject){
      setTimeout(() => {
        resolve("Promise resolved");
        reject ("Promise rejected")
      }, 10000);
    });

    prom.then((value:any)=>{
      console.log("Promise is executed");
      console.log("Promise is executed " + value);
    })
    prom.catch((value:any) => {
      console.log("Promise is not executed");
      console.log("Promise is not executed" + " " + value)
    })

    this.getPromiseAPIData();
    
  }

  getPromiseAPIData(){
    this.ser2.getPromiseData()
    .then((res:any)=>{
      console.log(res);
    })
    .catch((err:any)=>{
      console.log(err);
    })
  }

}
