import { Component } from '@angular/core';
import { RedditDataServiceService } from './reddit-data-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  subject = '';
  posts: object[];
  constructor(private redditDataService: RedditDataServiceService) {}
  getReddit() {
    this.redditDataService.getData(this.subject).subscribe(
      posts => {
        this.posts = posts;
      }
    );
  }
}
