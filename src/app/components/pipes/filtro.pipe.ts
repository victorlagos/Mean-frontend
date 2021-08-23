import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../../models/producto';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(productos: Producto[], page: number = 0, search:string = ""): Producto[] {
    if(search.length === 0)
    {
      return productos.slice(page, page + 5);
    }
    else
    {
      const filteredProductos = productos.filter( producto => producto.NOMBRE.toLowerCase().includes(search.toLowerCase()));
      return filteredProductos.slice(page, page + 5);
    }
  }
}