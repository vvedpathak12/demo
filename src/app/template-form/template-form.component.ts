import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private ser3 :DataService) { }

  myForm2: any;
  display : any;

  // arraydata:FormData[] =[]

  array:any=[];

  ngOnInit(): void {
  }

  // onSubmitForm(frm : any){
  //   // console.log(frm);
  //   //console.log(frm.value);
  //   // console.log(frm.value.email);
  //   console.log(frm.value.password);
  // }

  // onSubmitmyForm1(frm : any){
  //   // console.log(frm);
  //    console.log(frm.value);
  //   //console.log(frm.value.fname);
  // }

  onSubmitmyForm2(frm :any){

    console.log(frm.value);
    this.array.push(frm.value);
    console.log(this.array)

    this.ser3.sendTemplateFormData(frm.value).subscribe((res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    })
  }


  onChangeMyForm2(a:any , b:any){
    if(a==b){
      return;
    }
    else{
      this.display = "Password not matching , please re-enter the password" ;
    }
  }

}
