import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { NuevoEmpleadoComponent } from './components/nuevo-empleado/nuevo-empleado.component'; 
import { EmpleadoService } from './services/empleado.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    EditarEmpleadoComponent,
    ListarEmpleadosComponent,
    NuevoEmpleadoComponent
  ],
  exports: [
    EmpleadoRoutingModule
  ], 
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    EmpleadoRoutingModule
  ]
})
export class EmpleadoModule { }
