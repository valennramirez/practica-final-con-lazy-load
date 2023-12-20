import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Producto } from 'src/app/interface/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit{
  ngOnInit(): void {
    this.mostrarProductos(); 
  }

  constructor(private productoService : ProductoService, private formBuilder: FormBuilder) {}

  listaProductos: Producto[]=[]; 

  mostrarProductos() 
  {
    this.productoService.producto.subscribe(
      (producto) => {
        this.listaProductos.push(producto); 
        console.log(this.listaProductos)
      }
    )
  }

}
 