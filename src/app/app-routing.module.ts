import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistarComponent } from './form/registar/registar.component';
import { LoginComponent } from './form/login/login.component';
import { CreateNoteComponent } from './form/create-note/create-note.component';
import { AllNotesComponent } from './form/all-notes/all-notes.component';

const routes: Routes = [
  {
    path:'register',
    component: RegistarComponent  
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'createNote',
    component:CreateNoteComponent
  },
  {
    path:'allNotes',
    component:AllNotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
