import { Component } from '@angular/core';

import { NavController ,NavParams} from 'ionic-angular';

@Component({

  templateUrl: 'details.html'
})
export class detailsPage {
  item:any;
  constructor(public navCtrl: NavController,public params:NavParams) {
  

    this.item = params.get('item');

    // console.log(this.item);
  }
}
