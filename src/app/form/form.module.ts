import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistarComponent } from './registar/registar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateNoteComponent } from './create-note/create-note.component';
import { AllNotesComponent } from './all-notes/all-notes.component';



@NgModule({
  declarations: [
    RegistarComponent,
    LoginComponent,
    CreateNoteComponent,
    AllNotesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    RegistarComponent,
    LoginComponent,
    CreateNoteComponent,
    AllNotesComponent
  ]
})
export class FormModule { }
