import { Component, OnInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';


@Component({
  selector: 'portraits',
  templateUrl: './portraits.component.html',
  styleUrls: ['./portraits.component.scss'],
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
        animate(1000, style({opacity:1})) 
      ])
    ])
  ]
})
export class PortraitsComponent implements OnInit {

  dubai: boolean;
  delhivery: boolean;
  dinehour: boolean;
  showDubai: boolean;
  showDelhivery: boolean;
  showDine: boolean;

  options = {
    root : document.querySelector("#roll-box"),
    rootMargin : "0px",
    threshold : [0.8]
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
        }, 500);
      }, 500);
    }, 1500);
  }

  createObserver() {
    let Elm = document.querySelector("#dubai-info");
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if(!entry.isIntersecting) {
          return;
        }
        if(entry.intersectionRatio >= 0.8) {
          this.showDubai = true;
        }
        sherlockObserver.unobserve(entry.target);
      });
    };
    let sherlockObserver = new IntersectionObserver(callback, this.options);
    sherlockObserver.observe(Elm);
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
        }
        wrinklesObserver.unobserve(entry.target);
      });
    };
    let wrinklesObserver = new IntersectionObserver(callback, this.options);
    wrinklesObserver.observe(Elm);
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
        }
        eyesObserver.unobserve(entry.target);
      });
    };
    let eyesObserver = new IntersectionObserver(callback, this.options);
    eyesObserver.observe(Elm);
  }
}
