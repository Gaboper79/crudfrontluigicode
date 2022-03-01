import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Producto } from "../models/producto";

@Injectable({
  providedIn: "root",
})
export class ProductoService {
  productoUrl = "http://localhost:8080/producto/";
  constructor(private http: HttpClient) {}

  public lista(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productoUrl + "lista");
  }

  public detalle(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.productoUrl + `detalle/${id}`);
  }

  public save(producto: Producto): Observable<any> {
    return this.http.post<any>(this.productoUrl + `create`, producto);
  }
  public update(producto: Producto, id: number): Observable<any> {
    return this.http.put<any>(this.productoUrl + `update/${id}`, producto);
  }

  public delete(producto: Producto): Observable<any> {
    return this.http.delete<any>(this.productoUrl + `delete/${producto.id}`);
  }
}
