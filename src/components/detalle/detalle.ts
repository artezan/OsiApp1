import { Component } from '@angular/core';

/**
 * Generated class for the DetalleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detalle',
  templateUrl: 'detalle.html'
})
export class DetalleComponent {

  text: string;

  constructor() {
    console.log('Hello DetalleComponent Component');
    this.text = 'Hello World';
  }

}
