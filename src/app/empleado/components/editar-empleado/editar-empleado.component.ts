import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/empleado/interfaces/empleado';
import { EmpleadoService } from 'src/app/empleado/services/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit{

  ngOnInit(): void {
    this.initForm(); 
    this.getEmpleado(); 
  }

  constructor(private empleadoService : EmpleadoService, private router: Router, private formBuilder : FormBuilder, private route: ActivatedRoute) {}

  formulario! : FormGroup;  
  empleado: Empleado | any; 

  initForm()
  {
    this.formulario = this.formBuilder.group({
      nombre:[''],
      telefono:[0],
      gmail:[''],
      id:[0]
    })
  }

  getEmpleado()
  {
    this.route.params.subscribe( param => {
      const id =+ param['id']; 

      this.empleadoService.getEmpleado(id).subscribe({
        next : (em) => {
          this.empleado = em; 

          console.log(em); 

          this.formulario = this.formBuilder.group({
            nombre:[em.nombre],
            telefono:[em.telefono],
            gmail:[em.gmail],
            id:[em.id]
          })
        }
      })
    })
  }

  editarEmpleado() {
    this.empleadoService.putEmpleado(this.formulario.value).subscribe({
      next : (em) => {
        console.log('Empleado guardado,  ' + em)
        this.router.navigate(['/listar']); 
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }
}
