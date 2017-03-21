import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class RedditServices{
    http:any;
    baseUrl:string;
    newsUrl:string;
    NewsUrl:string;
    constructor(http:Http){
        this.http = http;
        // this.baseUrl = 'https://www.reddit.com/r';
        // this.newsUrl = 'http://v.juhe.cn/toutiao/index';
        this.NewsUrl = 'http://toutiao.com/api/article/recent/?source=2&category=news_hot&as=A1D5D87595C3287';
    }
    //获取新闻api数据
    getNewsData(){
        return this.http.get(this.NewsUrl).map(res=>res.json());
        // return this.http.get(this.newsUrl+'?type=&key=c7a691691f87092fc914f4d5ba34631e').map(res=>res.json());
    }

}