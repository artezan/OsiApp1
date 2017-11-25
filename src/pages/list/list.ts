import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetPage } from '../det/det';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items = [];
  tiempo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this. get_tiempo();

    this.items = [
       {
        title: 'Hermosa'
      },
        {
        title: 'Inteligente'

      },
        {
        title: 'La mejor Novia'

      },
      {
        title: 'Feliz'
        

      },
      {
        title: 'Fuerte'
       

      }
      ];
   
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetPage, item);
  }
  get_tiempo(){

var start_year = 2015;
var start_m = 11;
var start_d = 4;
var today = new Date();
var hh = String(today.getHours());
var dd =String( Number(today.getDate())-4);
var mm =String( 11-Number(today.getMonth()+1)); 
var yyyy = String( Number(today.getFullYear())-2015);
var fecha = dd +' dias '+ mm +' meses '+ yyyy + ' años ';

var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(2015,11,4);
var secondDate = new Date();

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
console.log(fecha)
this.tiempo = fecha

  }
}
