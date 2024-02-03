import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  
  userForm = new FormGroup({
    email:new FormControl(),
    password:new FormControl() 
  })

constructor(private FormService:FormService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
submit():void{
  this.FormService.loginUser(this.userForm.value).subscribe((val)=>{
    if(val.valid===1){
      this.CookieService.set("username"=val.username);
      this.cookieService.set("email"=val.email);
      this.cookieService.set("password"=val.password);
      this.cookieService.set("user_id"=val.user_id);
      this.router.navigate(["medium"])
    }
  })
 }
}
