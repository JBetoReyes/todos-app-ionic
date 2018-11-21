import {Component} from "@angular/core";
import {DeseosService} from "../../providers/deseos.service";

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.component.html'
})
export class TerminadosPage {

  constructor(public deseosService: DeseosService) {
  }

  listaSeleccionada(lista) {
    console.log(lista);
  }


}
