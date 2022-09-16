import { Component, OnInit } from '@angular/core';
import { filter, from, map, of } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor(private ser1 : DataService) { }

  DataStream : any;

  ngOnInit(): void {
    this.DataStream = from ([1 , 2 , 4 , 5 , 6 , 7 ,8 , 9 , 10]);
    console.log(this.DataStream);

    this.DataStream.subscribe((res : any) => {
      console.log(res);
    })

    
    this.DataStream = of (2 , 4 , 6 , 188 , 254 , 589 ,843 , 479 , 810);
    console.log(this.DataStream);

    this.DataStream.subscribe((res : any) => {
      console.log(res);
    })

    this.DataStream = of (2 , 4 , 6 , 188 , 254 , 589 ,843 , 479 , 810);
    console.log(this.DataStream);

    this.DataStream.pipe(filter((res:any) => res % 2 === 0)).subscribe((data:any)=>{
      console.log(data);
    },
    (err:any)=>{
      console.log(err);
    })

    // this.ser1.getDataMap().pipe(map(res => res.address)).subscribe((Data) => {
    //   console.log(Data,"hello");
    // })
    
  }

 
}
