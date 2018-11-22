import {Component} from "@angular/core";
import {DeseosService} from "../../providers/deseos.service";
import {Lista, ListaItem} from "../../models";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarPage {

  lista: Lista;
  nombreItem: string = '';

  constructor(
    public deseosService: DeseosService,
    private navParams: NavParams
  ) {
    const titulo = navParams.get('titulo');
    const id = this.navParams.get('id');
    if (id) {
      this.lista = this.deseosService.getLista(id);
    } else {
      this.lista = new Lista(titulo);
      deseosService.agregarLista(this.lista);
    }
  }

  agregarItem() {
    if (this.nombreItem.length === 0){
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.deseosService.guardarStorage();
    this.nombreItem = '';
  }

  actualizarTarea(item: ListaItem) {
    item.completado = !item.completado;
    const pendientes = this.lista.items.filter(itemData => {
      return !itemData.completado;
    }).length;
    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }
    this.deseosService.guardarStorage();
  }

  borrar(idx: number) {
    this.lista.items.splice(idx, 1);
  }

}
