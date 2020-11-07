import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/states.service';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0, transform: 'translateY(10%)'}),
        animate(300, style({opacity:1, transform: 'translateY(0)'})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(300, style({opacity:0, transform: 'translateY(10%)'})) 
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {

  submitted: boolean;
  showNot: boolean;
  contactBody = {
    name: '',
    email: '',
    type: '',
    message: ''
  }

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    // this.commonService.getData().subscribe(res => {
    //   console.log(res);
    // });
  }

  validate() {
    let oo = false;
    Object.keys(this.contactBody).forEach(e => {
      if(this.contactBody[e] == '') {
        oo = true;
      }
    });
    return oo;
  }

  submit() {
    this.commonService.createOrder(this.contactBody).then(res => {
      this.contactBody = {
        name: '',
        email: '',
        type: '',
        message: ''
      };
      this.submitted = true;
      this.showNot = true;
      setTimeout(() => {
        this.showNot = false;
      }, 3000);
    });
  }
}
