import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: any[]=[];
  favorites:any []=[];
  constructor(private newsService: CommonService) { }

  ngOnInit() {
    this.fetchNews();
  }

  fetchNews() {
    this.newsService.getNews().subscribe((data: any) => {
      this.newsList = data;
    });
  }

  markAsFavorite(newsItemTitle: string) {
    this.newsService.markAsFavorite(newsItemTitle).subscribe(() => {
      alert('News item marked as favorite');
    });
  }

  getFavorites(){
    this.newsService.getFavorites().subscribe((data)=>{
      this.favorites=data;
    })
  }

  showNewsDetails(newsItem: any) {
    const newsDetails = `Title: ${newsItem.title}\n\nDescription: ${newsItem.description}`;
    alert(newsDetails);
  }
}
