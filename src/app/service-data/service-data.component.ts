import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent implements OnInit {

  public allData : any;

  public userData : any;

  constructor(private tempSer :DataService) {
    console.log("This is the Component Constructor");

    // this.tempSer.getData();

    // console.log(this.tempSer.getData);

    // console.log(this.tempSer.data1);

    this.getDataFromBackend();

    this.getAllDataFromBackend();
   }

  ngOnInit(): void {
  }

  getDataFromBackend(){

    console.log(this.tempSer.getData());

    this.tempSer.getData().subscribe(
      (res)=>{
      console.log(res);
      this.userData =res;
      this.userData.map((x:any)=>{
        console.log(x);
        x.newAddress = x.address.city + x.address.geo.lat + x.address.geo.lng + x.address.street + x.address.suite +x.address.zipcode;
        return x;
      })
      console.log(this.userData ,"hi");
    },
    (err)=>{
      console.log(err);
    })

  }


  getAllDataFromBackend(){
    this.tempSer.getAllData().subscribe(
      (res) => {
        console.log(res);
        this.allData = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }
  

}
