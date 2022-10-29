import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts:any=[];
  constructor(private _postService:PostService) {
    this._postService.getposts().subscribe(
      ( data:any)=>{
        this.posts=data;

      },
      (Err:any)=>{
        alert('Internal Service Error');
      }

    )
   }

  ngOnInit(): void {
  }

}
