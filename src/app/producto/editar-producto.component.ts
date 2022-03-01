import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Producto } from "../models/producto";
import { ProductoService } from "../service/producto.service";

@Component({
  selector: "app-editar-producto",
  templateUrl: "./editar-producto.component.html",
  styleUrls: ["./editar-producto.component.scss"],
})
export class EditarProductoComponent implements OnInit {
  producto!: Producto;
  name!: string;
  price!: number;
  constructor(
    private productoSvc: ProductoService,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.rutaActiva.snapshot.params["id"];
    this.productoSvc.detalle(id).subscribe((data) => {
      this.producto = data;
    });
  }
  update() {
    const id: number = this.rutaActiva.snapshot.params["id"];
    const producto = new Producto(this.producto.name, this.producto.price);
    alert("Producto: " + this.producto.name);
    this.productoSvc.update(producto, id).subscribe((data) => {
      alert("Actualizado correctamente");
      this.router.navigate(["/"]);
    });
  }
}
