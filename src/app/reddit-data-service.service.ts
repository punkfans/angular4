import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RedditDataServiceService {
  posts = [];
  constructor(private jsonp: Jsonp) {}
  getData(subject: string): Observable<any[]> {
    const url = `https://www.reddit.com/r/${subject}/.json?jsonp=JSONP_CALLBACK`;
    return this.jsonp.get(url)
    .map(response => {
      const entries = response.json().data.children;
      console.log(response);
      for (const entry of entries) {
        this.posts.push({
          title: entry.data.title,
          url: 'https://www.reddit.com/' + entry.data.permalink
        });
      }
      return this.posts;
    })
    .catch(() => {
      this.posts = [];
      console.log('asdasd');
      return [];
    });
  }
}
