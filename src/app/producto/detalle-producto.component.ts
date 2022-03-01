import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Producto } from "../models/producto";
import { ProductoService } from "../service/producto.service";

@Component({
  selector: "app-detalle-producto",
  templateUrl: "./detalle-producto.component.html",
  styleUrls: ["./detalle-producto.component.scss"],
})
export class DetalleProductoComponent implements OnInit {
  producto!: Producto;
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
}
