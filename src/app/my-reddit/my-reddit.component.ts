import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-reddit',
  templateUrl: './my-reddit.component.html',
  styleUrls: ['./my-reddit.component.css']
})
export class MyRedditComponent implements OnInit {

  @Input() posts: object[];

  constructor() { }

  ngOnInit() {
  }

}
