import { Component, OnInit } from '@angular/core';
import {UserFeeds} from '../homedatafeeds';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  UserFeeds = UserFeeds;
  constructor() {
  }

  ngOnInit() {
  }

}
