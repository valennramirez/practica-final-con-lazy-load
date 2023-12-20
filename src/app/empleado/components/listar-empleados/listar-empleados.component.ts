import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado/interfaces/empleado';
import { EmpleadoService } from 'src/app/empleado/services/empleado.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit{

  ngOnInit(): void {
    this.obtenerEmpleados(); 
  }

  constructor (private empleadoService: EmpleadoService, private router : Router) {}

  listadoEmpleados: Empleado[] | any= []; 

  obtenerEmpleados()
  {
    this.empleadoService.getEmpleados().subscribe({
      next : (us) => {
        this.listadoEmpleados = us;
        console.log(us);
      }, 
      error : (err) => {
        console.log('Error. ' + err); 
      }
    })
  }

  eliminarEmpleado(id : number)
  {
    this.empleadoService.deleteEmpleado(id).subscribe({
      next : (us) => {
        console.log('Empleado eliminado'); 
        window.location.reload(); 
      }, 
      error : (err) => {
        console.log('Error. ' + err);
      }
    })
  }
}
