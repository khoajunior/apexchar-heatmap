import { Component } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Post} from './post';
import { Observable } from 'rxjs';
import { DataModel } from 'src/app/data/data.model';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';
import { async } from 'rxjs/internal/scheduler/async';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  data: Observable<DataModel>;
  
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/todos/2';
  posts:Observable <Post[]>;
  newPost:Observable <any>;

  dataSource: Object;
  constructor(private http :HttpClient){
    this.data = this.http.get<DataModel>('./assets/data.json');
    console.log('data');
    console.log(this.data);
     this.dataSource={
      "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    "data": [{
      "label": "Venezuela",
      "value": "290"
  }, {
      "label": "Saudi",
      "value": "260"
  }, {
      "label": "Canada",
      "value": "180"
  }, {
      "label": "Iran",
      "value": "140"
  }, {
      "label": "Russia",
      "value": "115"
  }, {
      "label": "UAE",
      "value": "100"
  }, {
      "label": "US",
      "value": "30"
  }, {
      "label": "China",
      "value": "30"
  }]

     }

  }

  getPosts(){
    let params = new HttpParams().set('userId', '1');

   
    //this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts',{ params})
    let headers = new HttpHeaders().set('Authorization', 'auth-token');
    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts',{ params,headers})
    
  }

  createPost(){
    const data: Post = {
    id: null,
    userId: 23,
    title: 'My New Post',
    body: 'hell wordls'
    }
    this.newPost = this.http.post<Post>(this.ROOT_URL + '/posts', data);
    console.log(this.newPost);
  
  }
}
