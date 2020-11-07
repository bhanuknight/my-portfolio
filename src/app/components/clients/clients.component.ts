import { Component, EventEmitter, OnInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';


@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0, transform: 'translateY(10%)'}),
        animate(500, style({opacity:1, transform: 'translateY(0)'})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0, transform: 'translateY(10%)'})) 
      ])
    ]),
    trigger('fadeInOut2', [
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
export class ClientsComponent implements OnInit {

  dubai: boolean;
  delhivery: boolean;
  dinehour: boolean;
  showDubai: boolean;
  showDelhivery: boolean;
  showDine: boolean;

  options = {
    root : document.querySelector("#scroll-box"),
    rootMargin : "0px",
    threshold : [0.3, 0.5, 0.8]
  }

  constructor() {

  }

  ngOnInit() {
    setTimeout(() => {
      this.dubai = true;
      setTimeout(() => {
        this.delhivery = true;
        setTimeout(() => {
          this.dinehour = true;
          setTimeout(() => {
            this.createObserver();
            this.createObserver2();
            this.createObserver3();
          },);
        }, 300);
      }, 300);
    }, 1500);
  }

  createObserver() {
    let Elm = document.querySelector("#dubai-info");
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry);
        if(!entry.isIntersecting) {
          return;
        }
        if(entry.intersectionRatio >= 0.8) {
          this.showDubai = true;
          setTimeout(() => {
            let vdo = (<HTMLMediaElement>document.getElementById("dubai-video"));
            vdo.muted = true;
            vdo.play();
          }, 100);
        } else if(entry.intersectionRatio <= 0.5 && entry.intersectionRatio >= 0.3) {
          this.showDubai = true;
          setTimeout(() => {
            let vdo = (<HTMLMediaElement>document.getElementById("dubai-video"));
            vdo.pause();
          }, 100);
        } else if(entry.intersectionRatio == 0) {
          // this.showDubai = false;
          dubaiObserver.unobserve(entry.target);
        }
      });
    };
    let dubaiObserver = new IntersectionObserver(callback, this.options);
    dubaiObserver.observe(Elm);
  }

  createObserver2() {
    let Elm = document.querySelector("#delhi-info");
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if(!entry.isIntersecting) {
          return;
        }
        if(entry.intersectionRatio >= 0.8) {
          this.showDelhivery = true;
          setTimeout(() => {
            let vdo = (<HTMLMediaElement>document.getElementById("del-video"));
            vdo.muted = true;
            vdo.play();
          }, 100);
        } else if(entry.intersectionRatio >= 0.5) {
          this.showDelhivery = true;
          setTimeout(() => {
            let vdo = (<HTMLMediaElement>document.getElementById("del-video"));
            vdo.pause();
          }, 100);
        } else if(entry.intersectionRatio == 0.0) {
          // this.showDelhivery = false;
          delhiveryObserver.unobserve(entry.target)
        } 
      });
    };
    let delhiveryObserver = new IntersectionObserver(callback, this.options);
    delhiveryObserver.observe(Elm);
  }

  createObserver3() {
    let Elm = document.querySelector("#dine-info");
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if(!entry.isIntersecting) {
          return;
        }
        if(entry.intersectionRatio >= 0.8) {
          this.showDine = true;
        } else if(entry.intersectionRatio >= 0.5) {
          this.showDine = true;
        } else if(entry.intersectionRatio == 0.0) {
          // this.showDine = false;
          dinehourObserver.unobserve(entry.target)
        } 
      });
    };
    let dinehourObserver = new IntersectionObserver(callback, this.options);
    dinehourObserver.observe(Elm);
  }
}
