import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {
    email: '', password: '', agree: ''
  };
  public submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(form: any) {
    if (form.valid) {
      console.log(this.user);
      this.submitted= true;
    } else{
      console.log("Invalid Form !");
      this.validateForm(form);
    }
   
  }

  public validateForm(form:any){
    Object.keys(form.controls).forEach(field =>{
      const control = form.controls[field];
      control.markAsTouched({ onlySelf : true });
    })
  }

  hasError(field:any) {
    return (field.invalid && field.touched && field.errors);
  }

}