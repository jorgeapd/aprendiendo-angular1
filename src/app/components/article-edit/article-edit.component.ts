import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.css',
  providers: [ArticleService]
})
export class ArticleEditComponent {

  public user!: any;
  public campo!: string;
  article: any;
  public status!: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.article = {
      title: '',
      image: '',
      content: '',
    };

  }

}
