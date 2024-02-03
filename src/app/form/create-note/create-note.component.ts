import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {

  userForm = new FormGroup({
    title:new FormControl(),
    description:new FormControl(),
    user_id:new FormControl()
  })
  constructor(private FormService:FormService){}

  submit():void{
    this.FormService.insertNote(this.userForm.value).subscribe((data)=>{
      console.log(data);
    })
  }
}
