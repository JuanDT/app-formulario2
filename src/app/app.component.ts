import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datosFormulario = {
    nombre: '',
    apellidos: '',
    sexo: '',
    edad: '',
    correo: ''
  };
  datosFormularioEnviado: any = null;

  submitForm() {
    console.log('Formulario enviado:', this.datosFormulario);
    this.datosFormularioEnviado = { ...this.datosFormulario };
    this.datosFormulario = {
      nombre: '',
      apellidos: '',
      sexo: '',
      edad: '',
      correo: ''
    };
  }
  clearData() {
    this.datosFormularioEnviado = null;
  }
}
