import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductoListaComponent } from './productos/producto-lista.component';
import { FormsModule } from '@angular/forms';

import { CarritoComponent } from './Carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListaComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
