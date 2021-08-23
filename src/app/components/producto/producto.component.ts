import { Component, Input, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public search: string = "";
  public page: number = 0;
  producto: any;

  constructor(public productoService: ProductoService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getProductos();
  }

getProductos(){
  this.productoService.getProductos().subscribe(
    res => {
      this.productoService.productos = res;
    },
    err => console.log(err)
  )
}

onSearcProducto(search:string){
  this.page = 0;
  this.search = search;
}

nextPage(){
  this.page += 5;
}

prevPage(){
  if(this.page > 0)
  this.page -= 5;
}

verProducto(modal: any){
  this.modalService.open(modal);
}

aMoneda(moneda:string)
{
  let num = moneda.replace(/\./g,'');
  if(num){
    num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
    num = num.split('').reverse().join('').replace(/^[\.]/,'');
    moneda = num;
  }
 
  else{ alert('Solo se permiten numeros');
    moneda = moneda.replace(/[^\d\.]*/g,'');
  }
}
}