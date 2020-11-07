import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0, transform: 'translateY(-10%)'}),
        animate(500, style({opacity:1, transform: 'translateY(0)'})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0, transform: 'translateY(-10%)'})) 
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  show: boolean;

  showCV: boolean;

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
			let list = params['page'];
			if (list) {
				if(list === 'about') {
          setTimeout(() => {  
            this.show = true;
          }, 1000);
        } else {
          this.show = false;
        }
      }
    });
  }
}
