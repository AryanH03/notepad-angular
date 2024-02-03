import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Note } from 'src/app/Interfaces/note.interface';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {
notes!:Note[];
  constructor(private FormService:FormService){}
  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes():void{
    this.FormService.getAllNotes().subscribe((data)=>{
      console.log(data);
      this.notes=data;
    })
  }
}
