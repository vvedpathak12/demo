import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
public sampleString : String = "";

public link : any;

public image :any;

public image1 :any;

public FullName : String = "Vaibhav";

public Branch :any = "Mechanical";

  constructor() { }

  ngOnInit(): void {
    //Interpolation Binding
    this.sampleString = "Hello This is Interpolation Binding";

    //Attribute Binding
    this.link = "https://www.youtube.com/";

    this.image = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"

    this.image1 = "assets/image/businessman-touching-tip-bar-chart.jpg"
  }

  //Event Binding
  showClick(){
    console.log("Hello this is Event Binding")
  }

  showAlert(){
    alert("This is Alert Event")
  }

}
