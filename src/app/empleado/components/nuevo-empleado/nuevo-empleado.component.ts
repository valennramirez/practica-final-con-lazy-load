import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../interfaces/empleado';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit{

  constructor (private empleadoService : EmpleadoService, private formBuilder : FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.initForm();
  }

  formulario! : FormGroup;  

  initForm()
  {
    this.formulario = this.formBuilder.group({
      nombre : [''], 
      telefono :[0], 
      gmail: [''], 
      id: [0]
    })
  }

  addEmpleado()
  {
    return this.empleadoService.postEmpleado(this.formulario.value).subscribe({
      next: (us) => {
        console.log('Empleado guardado con exito. Nombre: ' + us.nombre); 
        this.router.navigate(['/listar'])
        console.log(us); 
      }, 
      error : (err) => {
        console.log('Error. No se puedo guardar el empleado. ' + err); 
      }
    })
  }

  



}
