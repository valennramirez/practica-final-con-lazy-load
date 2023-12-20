import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Producto } from 'src/app/interface/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit{

  ngOnInit(): void {
    this.initForm(); 
  }

  constructor(private productoService : ProductoService, private formBuilder: FormBuilder) {}

  formulario! : FormGroup; 

  initForm()
  {
    this.formulario = this.formBuilder.group({
      nombre: [''], 
      precio: [0]
    })
  }

  agregarProducto() {
   
    this.productoService.producto.emit(this.formulario.value); 
    console.log(this.formulario.value); 
  }
}
