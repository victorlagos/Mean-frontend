import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL_API = "http://Localhost:3800/api/productos";
  productos: Producto[] = [];

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get<Producto[]>(this.URL_API);
  }
}