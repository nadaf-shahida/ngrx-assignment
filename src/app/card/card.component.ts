import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: any;
  @Input() subtitle: any;
  @Input() content = 'Card Content';
  @Output() btnClicked = new EventEmitter();

  constructor() {}

  handleBtnClick(){
    console.log('clicked');
  }

}
