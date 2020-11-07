import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0})) 
      ])
    ])
  ]
})
export class BasicInfoComponent implements OnInit {

  @Output() stateChange = new EventEmitter<any>();

  str1: string;
  str2: string;
  str3: string;
  str4: string;

  bol1: boolean;
  bol2: boolean;
  bol3: boolean;

  arr1 = "Hi";
  arr2 = "I'm Bhanu Singh";
  arr3 = "Welcome to my";
  arr4 = "Portfolio";

  x = 0;
  y = 0;
  z = 0;
  mainList = [];
  smallList = [];
  strList = ['', '', '', ''];

  state: boolean;

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
			let list = params['page'];
			if (list) {
				if(list === 'about') {
          this.state = true;
          this.strList[0] = this.arr1;
          this.strList[1] = this.arr2;
          this.strList[2] = this.arr3;
          this.strList[3] = this.arr4;
          this.bol1 = true;
          this.bol2 = false;
          this.bol3 = false;
        } else {
          this.bol2 = true;
          this.bol3 = true;
        }
      } else {
        this.startEvents();
      }
    });
  }

  startEvents() {
    if(localStorage.getItem('page')) {
      this.preState();
      return;
    }
    this.mainList = [this.arr1, this.arr2, this.arr3, this.arr4];
    for (let i = 0; i < this.mainList.length; i++) {
      this.smallList[i] = this.mainList[i].split("");
    }
    this.looper();
  }

  preState() {
    this.strList[0] = this.arr1;
    this.strList[1] = this.arr2;
    this.strList[2] = this.arr3;
    this.strList[3] = this.arr4;
    this.bol1 = this.bol2 = this.bol3 = true;
    this.state = true;
  }

  looper() {
    this.y = this.smallList[this.z].length;
    this.strList[this.z] += this.smallList[this.z][this.x];
    this.x++;
    if (this.x === this.y) {
      this.z++;
      if (this.z === 1) {
        this.x = 0;
        setTimeout(() => {
          this.bol1 = true;
          this.looper();
        }, 1000);
      } else if (this.z === 2) {
        this.x = 0;
        setTimeout(() => {
          this.bol2 = true;
          this.looper();
        }, 1000);
      } else if (this.z === 3) {
        this.x = 0;
        setTimeout(() => {
          this.bol3 = true;
          this.looper();
        }, 1000);
      } else if (this.z === 4) {
        setTimeout(() => {
          this.state = true;
          this.stateChange.emit();
        }, 1000);
      }
    } else if (this.x < this.y) {
      setTimeout(() => {
        this.looper();
      }, 100);
    } else {
      return;
    }
  }
}
