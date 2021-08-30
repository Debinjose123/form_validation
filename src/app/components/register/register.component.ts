import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
 
 profileForm:any
 alert:boolean=false;
  ngOnInit(): void {
    this.profileForm=new FormGroup(
      {
        "firstName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
        "lastName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
        "emailId":new FormControl(null,[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
        "mobileNumber":new FormControl(null,[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
        "address":new FormControl(null,[Validators.required]),
      }
    );
  }
  submitData()
  {
    console.log(this.profileForm.value)
    this.alert=true;
     this.profileForm.reset({})
  }
 
  get firstname()
  {
    return this.profileForm.get('firstName');
  }
  get lastname()
  {
    return this.profileForm.get('lastName');
  }
  get emailid()
  {
    return this.profileForm.get('emailId');
  }
  get mobilenumber()
  {
    return this.profileForm.get('mobileNumber');
  }
  get useraddress()
  {
    return this.profileForm.get('address');
  }
  closeAlert()
  {
    this.alert=false;
  }
}