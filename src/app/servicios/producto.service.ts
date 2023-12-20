import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from '../interface/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  producto = new EventEmitter<Producto>(); 

}
 