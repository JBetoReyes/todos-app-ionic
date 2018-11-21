import {Component} from "@angular/core";
import {DeseosService} from "../../providers/deseos.service";

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

  constructor(private deseosService: DeseosService) {

  }
}
