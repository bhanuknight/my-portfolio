import { Component, Input, OnInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';
import { CommonService } from 'src/app/services/states.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(800, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(800, style({opacity:0})) 
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {

  frame: boolean;
  strike: boolean;
  list: boolean;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.route.queryParams.subscribe(params => {
        let list = params['page'];
        if (list) {
          if(list === 'about') {
            setTimeout(() => {  
              this.frame = true;
              this.list = false;
              this.strike = false;
            }, 500);
          } else {
            this.list = true;
            this.strike = true;
          }
        } else {
          this.startEvents();
        }
      });
    }, );
  }

  startEvents() {
    setTimeout(() => {
      this.frame = true;
      setTimeout(() => {
        this.list = true;
        setTimeout(() => {
          this.strike = true;
        }, 3000);
      }, 800);
    }, 600);
  }
}