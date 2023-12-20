import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoEmpleadoComponent } from './components/nuevo-empleado/nuevo-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';

const routes: Routes = [
    {path: 'nuevo', component:NuevoEmpleadoComponent}, 
    {path:'editar/:id', component: EditarEmpleadoComponent},
    {path:'listar', component: ListarEmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
