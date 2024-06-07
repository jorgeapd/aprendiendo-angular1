import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';


@Component({

  selector: 'app-article.new',
  templateUrl: './article.new.component.html',
  styleUrls: ['./article.new.component.css'], 
  providers: [ArticleService]
})

export class ArticleNewComponent {
  public user!: any;
  public campo!: string;
  article: any;
  public status!: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
  ){
    this.article = {
    title:'',
    image:'',
    content:'',
    };

  }

  //ngOnInit(): void {}

  onSubmit(){
    this._articleService.create(this.article).subscribe(
      response => {
        if(response.status == 'success' ){
            this.status = 'success';
            this.article = response.article;
            this._router.navigate(['/blog']);
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status ='error';
      }
    );
  }
}
