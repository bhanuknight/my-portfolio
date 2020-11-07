import { Component, OnInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss'],
  animations: [
    trigger('drawin', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({height:'0'}),
        animate(800, style({height:'100%'})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(800, style({height:'0'})) 
      ])
    ]),
    trigger('drawin2', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({height:'0'}),
        animate(2000, style({height:'100%'})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(2000, style({height:'0'})) 
      ])
    ])
  ]
})
export class LinesComponent implements OnInit {

  all: boolean;
  top: boolean;
  bottom: boolean;

  constructor() {

  }

  ngOnInit() {
    setTimeout(() => {
      this.all = true;
      setTimeout(() => {
        this.bottom = true;
      }, 800);
      setTimeout(() => {
        this.top = true;
      }, 2000);
    }, 800);
  }
}
