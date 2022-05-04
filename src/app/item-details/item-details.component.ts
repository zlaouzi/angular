import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-details',
  template: '<button (click)="delete()">delete</button>',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  @Output() deleteRequest = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  delete() {
    this.deleteRequest.emit('join name');
  }
}
