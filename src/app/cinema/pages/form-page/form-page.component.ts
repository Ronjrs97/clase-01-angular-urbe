import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-forms-page',
  imports: [ReactiveFormsModule],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css',
})
export default class FormspageComponent {

  private fb = new FormBuilder();

  // name= new FormControl('');
  claseForm: FormGroup;

  constructor(){
    this.claseForm = this.fb.group({
      name: [''],
      email: [''],
      mensaje: ['']
    })
  }

  ngOnInit(){

  }

  onChangeName(){

  }

  onSubmit(){
    console.log(this.claseForm);
  }
}
