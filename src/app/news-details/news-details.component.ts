import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {

  newsItem: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.newsItem = history.state.newsData;
  }
}
