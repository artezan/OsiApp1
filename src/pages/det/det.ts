import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-det',
  templateUrl: 'det.html',
})
export class DetPage {
item:any;
icon:any;
detalle:any;
note:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.item = navParams.get('title');
  	this.icon = navParams.get('icon');
     this.detalle = navParams.get('detalle');
     this.note = navParams.get('note');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetPage');
  }

}
