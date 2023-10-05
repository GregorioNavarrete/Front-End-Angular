import { Component } from "@angular/core";

@Component({
    selector: 'pm-productos',
    templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent {
    pageTitle: string = 'Lista de Productos';
    products: any[]=[
        {
            "productId": 2,
            "productName": "Carro de jardín",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "Carro de jardín con ruedas de 15 galones de capacidad",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          },
          {
            "productId": 5,
            "productName": "Martillo",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2021",
            "description": "Martillo de acero con garra curva",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
          }
    ];
}