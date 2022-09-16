import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  Branches : any = [ "" , "Mechanical" , "Computer" , "Civil" , "ENTC"];

  display :any ;
  

  constructor(private fb : FormBuilder , private ser : DataService) { }
  isSubmitted : boolean = false;
  myForm1:any;
  myForm2:any;
  myForm3:any;
  myForm4:any;
  password : any;

  show = false;

  ngOnInit(): void {
    this.myForm1 = this.fb.group ({
      fname : ["" , [Validators.required]],
      mname : ["" , [Validators.required]],
      lname : ["" , [Validators.required]],
      email : ["" , [Validators.required , Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      enrnum : ["" , [Validators.required]],
      marks : ["" , [Validators.required]],
      brnch : ["" , [Validators.required]],
      date : ["" , [Validators.required]],
      bgroup : ["" , [Validators.required]],
      //pass : ["" , [Validators.required]],
      confirmpass : ["" , [Validators.required]],
      gender : ["" , [Validators.required]]

    })

    this.myForm2 =this.fb.group ({
      email : ["" , [Validators.required]],
    })

    this.myForm3 =this.fb.group ({
      fname : ["" , [Validators.required]],
      lname : ["" , [Validators.required]],
      email : ["" , [Validators.required , Validators.pattern (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      gender : ["" , [Validators.required]],
      pass : ["" , [Validators.required , Validators.pattern (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/)] ],
      cpass : ["" , [Validators.required , Validators.pattern (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/)] ],
    })

    this.myForm4 =this.fb.group ({
      fname : ["" , [Validators.required]],
      lname : ["" , [Validators.required]],
      email : ["" , [Validators.required , Validators.pattern (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      gender : ["" , [Validators.required]],
      pass : ["" , [Validators.required , Validators.pattern (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/)] ],
      cpass : ["" , [Validators.required , Validators.pattern (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/)] ],
    })

    this.password = 'password';


  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  onSubmitForm(){
    //console.log(this.myForm1);
    console.log(this.myForm1.value)
    //console.log(this.myForm1.value.email)
    this.isSubmitted = true;
  }


  onSubmitForm2(){
    console.log(this.myForm2);
    this.isSubmitted = true;
  }

  onSubmitForm3(){
    console.log(this.myForm3);
    this.isSubmitted =true;
  }

  onSubmitForm4(){
    console.log(this.myForm4.value);
    this.isSubmitted =true;

    this.ser.sendData(this.myForm4.value).subscribe(
      (res) => {
        console.log(res);
        this.getDataFromBackend();
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getDataFromBackend(){

    console.log(this.ser.getData());

    this.ser.getData().subscribe(
      (res)=>{
      console.log(res);
    },
    (err)=>{
      console.log(err);
    })

  }

  onChangeForm3(){
    if(this.myForm3.value.pass == this.myForm3.value.cpass){
      return ;
    }
    else{
      this.display ="Password not matching , please re-enter the password" ;
    }
  }

  get f() {
    return this.myForm1.controls;
  }

  get f1(){
    return this.myForm2.controls;
  }

  get f2(){
    return this.myForm3.controls;
  }

  get f3(){
    return this.myForm4.controls;
  }
}
