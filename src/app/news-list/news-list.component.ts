import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: any[]=[];
  favorites:any []=[];
  constructor(private newsService: CommonService,private router:Router) { }

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
    this.router.navigate(['/news/details'],{state:{newsData:newsItem}})
  }
}
