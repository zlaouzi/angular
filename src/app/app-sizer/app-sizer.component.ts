import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-sizer',
  templateUrl: './app-sizer.component.html',
  styleUrls: ['./app-sizer.component.css']
})
export class AppSizerComponent implements OnInit {
@Input() size: number;
@Output() sizeChange = new EventEmitter<number>(); 
  constructor() { }

  ngOnInit(): void {
  }
  /** To descrease the font-size */
  dec(){
    this.resize(-1);
  }
 /**To increase font-size */
 inc(){
   this.resize(+1);
 }
 resize(delta:number){
   this.size = Math.min(40, Math.max(8, +this.size + delta));
   this.sizeChange.emit(this.size);
 }
}
