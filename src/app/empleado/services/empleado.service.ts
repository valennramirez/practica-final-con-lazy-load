import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../interfaces/empleado';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {

  constructor(private http : HttpClient) { }

  url:string='http://localhost:4000/empleados'; 

  getEmpleados () : Observable<Empleado[]>
  {
    return this.http.get<Empleado[]>(this.url); 
  }

  getEmpleado (id : number) : Observable<Empleado>
  {
    return this.http.get<Empleado>(`${this.url}/${id}`); 
  }

  postEmpleado (empleado : Empleado | any) : Observable<Empleado>
  {
    return this.http.post<Empleado>(this.url, empleado, {headers : {'Content-type' : 'application/json'}}); 
  }

  putEmpleado (empleado : Empleado) : Observable <Empleado>
  {
    console.log(empleado.id)
    return this.http.put<Empleado>(`${this.url}//${empleado.id}`, empleado, {headers : {'Content-type' : 'application/json'}}); 
  }

  deleteEmpleado(id : number) : Observable <Empleado>
  {
    return this.http.delete<Empleado>(`${this.url}/${id}`); 
  }

}
