import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  toggle: boolean;

  constructor() {

  }

  ngOnInit() {
    setTimeout(() => {
      this.toggle = true;
    }, 1000);
  }
}
