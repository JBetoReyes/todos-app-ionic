import {Component, Input} from "@angular/core";
import {DeseosService} from "../providers/deseos.service";
import {Lista} from "../models";
import {AgregarPage} from "../pages/agregar/agregar.component";
import {AlertController, ItemSliding, NavController} from "ionic-angular";

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.component.html'
})
export class ListasComponent {

  @Input() listaType: boolean;

  constructor(
    public deseosService: DeseosService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
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

  editarLista(lista: Lista, slidingItem: ItemSliding) {
    slidingItem.close();
    const alert = this.alertCtrl.create({
      title: 'Editar Lista',
      message: 'Nombre de la lista que desea editar',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de la lista',
        value: lista.titulo
      }],
      buttons: [{
        text: 'Cancelar',
      }, {
        text: 'Guardar',
        handler: (data) => {

          if (data.titulo.length ===  0) {
            return;
          }
          lista.titulo = data.titulo;
          this.deseosService.guardarStorage();
        }
      }]
    });

    alert.present();
  }

}
