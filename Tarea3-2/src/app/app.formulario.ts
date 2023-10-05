import { Component } from "@angular/core";

@Component({
    selector: 'pm-formulario',
    templateUrl: './app.formulario.html',//tengo que linkearlo con el HTML
})
export class AppFormulario {
  //le agrego unas propiedades para hacer "databinding"

  pagetitle :string = 'Titulo con databending';
}