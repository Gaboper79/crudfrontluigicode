export class Producto {
  id?: number;
  name!: string;
  price!: number;

  constructor(nombre: string, precio: number) {
    this.name = nombre;
    this.price = precio;
  }
}
