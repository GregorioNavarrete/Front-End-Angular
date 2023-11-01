import { Component } from "@angular/core";
import { ProductService } from "./product.service";
import { IProduct } from "./product";

@Component({
  selector: 'pm-productos',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent {
  Total: number=0;
  pageTitle: string = 'Lista de Productos';
  carrito: any[] = [];
  productos: IProduct[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: IProduct[]) => {
        this.productos = data;
      },
      (error) => {
        // Manejar errores si es necesario
        console.error('Error al obtener los productos: ', error);
      }
    );
  }



  agregarAlCarrito(prod: any) {
    // Agrega un producto al carrito
    //para no agregar repetidos 

    let index = this.carrito.findIndex(p => p.productName === prod.productName);
    if (index === -1){
      this.carrito.push(prod);
    }else{
      prod.cantidad++;
    }
  }
  onRatingClicked(event: any) {
    // Lógica a ejecutar cuando se hace clic en el componente pm-star
  }

  masCantidad(prod:any): void{
    prod.cantidad++;
  }
  menosCantidad(prod:any): void{
    if(prod.cantidad >0){
      prod.cantidad--;
    }
  }


  calcularTotal(): void {
    //se ejecuta cuando agrego o quito una cantidad 
    //cuando agego un elemento al acarrito

    let sumador=0;
    if(this.carrito.length ===0){
      this.Total=0;
    }else{
      this.carrito.forEach(prod => {
        sumador += prod.price * prod.cantidad;
        console.log(sumador);
      })
    this.Total= sumador;
    }


  }
}
