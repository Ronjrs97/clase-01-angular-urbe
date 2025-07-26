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

  hasError(field: string): boolean{

    const control = this.claseForm.get(field);
    if (control) {
      return !control.valid && control.touched;
    }
    return false;
    // if (control?.valid) {

    // }
    // return !!(control?.valid);
  }

  isValid(field: string){
    const control = this.claseForm.get(field);
    if (control) {
      return control.valid && control.touched;
    }
    return false;
  }

  getErrorMessage(field: string): string {

    const control = this.claseForm.get(field);

    if(!control?.errors) return '';

    const errors = control.errors;

    switch (field) {
      case 'name':
        if(errors['required']) return 'El nombre es requerido';
        if(errors['minlength']) return 'El nombre debe tener al menos 3 caracteres';
        break;
      case 'email':
        if(errors['required']) return 'El coreeo es requerido';
        if(errors['email']) return 'Debes ingresar un correo valido';
        break;
      case 'mensaje':
        if(errors['required']) return 'El mensaje es requerido';
        if(errors['minlength']) return 'El mensaje debe tener al menos 7 caracteres';
        break;
    }

    return '';
  }
}
