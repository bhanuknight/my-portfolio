import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'navigation-mob',
  templateUrl: './navigation-mob.component.html',
  styleUrls: ['./navigation-mob.component.scss']
})
export class NavigationMobComponent implements OnInit {
  toggle: boolean;
  currentNav: string;

  constructor(private route: Router, private url: ActivatedRoute) {

  }

  ngOnInit() {
    this.url.queryParams.subscribe(val => {
      this.currentNav = val['page'];
    })
    setTimeout(() => {
      this.toggle = true;
    }, 1000);
  }

  emitNav(val) {
    this.route.navigate([],{ queryParams: {'page': val} });
    this.currentNav = val;
  }
}
