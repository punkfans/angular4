import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RedditDataServiceService {

  constructor(private jsonp: Jsonp) {}
  getData(subject: string): Observable<any[]> {
    const url = `https://www.reddit.com/r/${subject}/.json?jsonp=JSONP_CALLBACK`;
    return this.jsonp.get(url)
    .map(response => {
      const entries = response.json().data.children;
      console.log(entries);
      const posts = [];
      for (const entry of entries) {
        posts.push({
          title: entry.data.title,
          url: 'https://www.reddit.com/' + entry.data.permalink
        });
      }
      return posts;
    });
  }
}
