import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-forms-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css',
})
export default class FormspageComponent {

  private fb = new FormBuilder();

  // name= new FormControl('');
  claseForm: FormGroup;

  constructor(){
    this.claseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(7)]]
    })
  }

  ngOnInit(){

  }

  onChangeName(){

  }

  onSubmit(){
    if (this.claseForm.valid) {
      console.log(this.claseForm);
      console.log('Formulario correcto');

    }
  }
}
