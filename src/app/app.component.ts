import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface IPost{
  userId:number,
  id:number,
  title:string,
  body:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private http:HttpClient){
  }
  endpoint = 'https://jsonplaceholder.typicode.com/posts';

  posts:IPost[];
  ngOnInit(){
    this.http.get(this.endpoint).subscribe((posts:IPost[])=>{
      this.posts = posts;
    })
  }
}
