import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'pm-carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
    Total: number = 0;

    @Input() carrito: any[] = [];
    ArrCpy: any[] = [];
    @Output() ratingClicked: EventEmitter<any[]> = new EventEmitter<any[]>();

    
    onClick(): void {
        this.ratingClicked.emit(this.ArrCpy);
        
    }

    eliminarDelCarrito(producto: any): void {
        // Encuentra el índice del producto en el carrito por su nombre
        const index = this.carrito.findIndex(p => p.productName === producto.productName);
        if (index !== -1) {
            // Utiliza splice para eliminar el producto del carrito
            this.carrito.splice(index, 1);

            // Emite el carrito actualizado después de eliminar un producto
            this.ratingClicked.emit(this.carrito);
        }
    }
    calcularTotalPorProducto(producto: any): number {
        // Realiza el cálculo multiplicando el precio por la cantidad
        return producto.price * producto.cantidad;
        
      }

 



}
