import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
