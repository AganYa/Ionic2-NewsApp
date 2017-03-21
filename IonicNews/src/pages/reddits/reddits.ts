import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { RedditServices } from '../../app/services/reddits.services';

// import {detailsPage} from '../details/details';

import { BrowserPage } from '../browser/browser';

import { LoadingController } from 'ionic-angular';
// import { ShareModel } from '../browser/browser.sharemodel';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class redditsPage {
  items:any;
  
  constructor(public navCtrl: NavController,
  private redditServices:RedditServices,
  public loadingCtrl: LoadingController
  ) {
  
  }

  ngOnInit() {
     
    this.presentLoading();

    this.getNewsData();

  }

    getNewsData(){
      this.redditServices.getNewsData().subscribe(Response =>{
        console.log(Response);
        // this.items = Response.result.data;
        this.items = Response.data;
      });
    }

    presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "数据加载中...",
      duration: 1000
    });
    loader.present();
  }

  viewItem(item){
    // console.log(item.title);
    this.navCtrl.push(BrowserPage, {
                browser: {
                    title: item.title,
                    url: item.url,
                    item:item
                }
            });

  }

}
