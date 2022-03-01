import { Component, OnInit } from "@angular/core";
import { Producto } from "../models/producto";
import { ProductoService } from "../service/producto.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-nuevo-producto",
  templateUrl: "./nuevo-producto.component.html",
  styleUrls: ["./nuevo-producto.component.scss"],
})
export class NuevoProductoComponent implements OnInit {
  name!: string;
  price!: number;
  constructor(
    private productoSvc: ProductoService,

    private router: Router
  ) {}

  ngOnInit(): void {}
  onCreate(): void {
    const producto = new Producto(this.name, this.price);
    this.productoSvc.save(producto).subscribe(
      (data) => {
        alert("producto cargado correctamente");
        this.router.navigate(["/"]);
      },
      (err) => {
        alert("Error:" + err.error.message);
        this.router.navigate(["/"]);
      }
    );
  }
}
