import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent  implements OnInit {

  
  userForm = new FormGroup({
    username:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    
  })

  constructor(private FormService : FormService){}
  ngOnInit(): void {
  }
  
  submit():void{
    this.FormService.insertUser(this.userForm.value).subscribe((val)=>{
      console.log(val);
    })
  }
  

}
