import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {style, state, animate, transition, trigger, sequence, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(800, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(400, style({opacity:0})) 
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({transform: 'translateY(100%)'}),
        animate(300, style({transform: 'translateY(0)'})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(300, style({transform: 'translateY(100%)'})) 
      ])
    ]),
    trigger('shutter', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({width:'0px', height:0, left: '46%', borderLeft: 0, borderRight: 0}),
        sequence([
          animate('.8s ease-in-out', keyframes([
            style({height: 0, borderLeft: '1px solid grey', borderRight: '1px solid grey'}),
            style({height: '100vh', borderLeft: '1px solid grey', borderRight: '1px solid grey'})
          ])),
          animate('.8s ease-in-out', keyframes([
            style({width:'0px', left:'46%'}),
            style({width:'100vw', left:'0'})
          ]))
        ])
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        style({width:'100vw', height:'100vh', left: '0', borderLeft: 0, borderRight: 0}),
        sequence([
          animate('.6s ease-in-out', keyframes([
            style({width:'100vw', left:'0', borderLeft: '1px solid grey', borderRight: '1px solid grey'}),
            style({width:'0px', left:'46%', borderLeft: '1px solid grey', borderRight: '1px solid grey'})
          ])),
          animate('.6s ease-in-out', keyframes([
            style({height: '100vh'}),
            style({height: 0})
          ]))
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit{
  title = 'my-portfolio';
  page: string = "";
  isOpen: boolean;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      // this.isOpen = false;
			let list = params['page'];
			if (list) {
				if(list === 'clients') {
          localStorage.setItem('page', 'clients');
          this.page = "clients";
        } else if(list === 'portraits') {
          localStorage.setItem('page', 'portraits');
          this.page = "portraits";
        } else if(list === 'contact') { 
          localStorage.setItem('page', 'contact');
          this.page = "contact";
        }else {
          this.page = "home";
        }
      }
    });
  }

  ngOnInit() {
    if(localStorage.getItem('page')) {
      localStorage.setItem('page', 'home');
      this.page = "home";
    }
  }

  goToHome() {
    localStorage.setItem('page', 'home');
    this.page = "home";
  }

  trackMouse() {
  }
}
