import { Component, OnInit } from "@angular/core";
import { Producto } from "../models/producto";
import { ProductoService } from "../service/producto.service";

@Component({
  selector: "app-lista-producto",
  templateUrl: "./lista-producto.component.html",
  styleUrls: ["./lista-producto.component.scss"],
})
export class ListaProductoComponent implements OnInit {
  productos: Producto[] = [];
  edit: boolean = false;
  constructor(private productoSvc: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoSvc.lista().subscribe(
      (data) => {
        this.productos = data;
      },
      (err) => console.log(err)
    );
  }

  borrar(producto: Producto): void {
    this.productoSvc.delete(producto).subscribe(
      (data) => {
        alert("Producto eliminado");
        this.cargarProductos();
      },
      (err) => {
        alert(err.error.mensaje);
      }
    );
  }
  editar(producto: Producto): void {}
}
