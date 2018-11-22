import {Injectable} from "@angular/core";
import {Lista} from "../models";

@Injectable()
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  agregarLista(lista: Lista) {
    this.listas.push(lista);
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    const data = localStorage.getItem('data');
    if (data) {
      this.listas = JSON.parse(data);
    }
  }

  getLista(id) {
    let lista;
    if (this.listas.length > 0) {
      lista = this.listas.find((currList) => {
        return currList.id === id;
      });
    }
    return lista;
  }

  borrarLista(id) {
    this.listas = this.listas.filter(x => x.id !== id);
    this.guardarStorage();
  }
}
