import {Component, Input} from "@angular/core";
import {DeseosService} from "../providers/deseos.service";
import {Lista} from "../models";
import {AgregarPage} from "../pages/agregar/agregar.component";
import {NavController} from "ionic-angular";

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.component.html'
})
export class ListasComponent {

  @Input() listaType: boolean;

  constructor(
    public deseosService: DeseosService,
    private navCtrl: NavController,
  ) { }

  listaSeleccionada(lista: Lista) {
    this.navCtrl.push( AgregarPage, {
      titulo: lista.titulo,
      id: lista.id
    });
  }

  borrar(id) {
    this.deseosService.borrarLista(id);
  }

}
