import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Output() deleteRequest = new EventEmitter<string>();
  showtext = false;
  /**class binding */
  onSale = false;
  fontSizepx = 14;
  title =
    'The platform that will help your school to offer personalised service';
  /**Logging some values to the console */
  intervalSub;
  ngOnInit(): void {
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit');
    }, 1000);
  }
  ngOnDestroy() {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }
  /**Toggle showtext value on every Method Call */
  toggleText(): void {
    this.showtext = !this.showtext;
  }
  todaysDate = new Date();
  itemImageUrl = '../assets/pic.png';
  onSave() {
    console.log('Joined successfuly');
  }
  deleteItem(item) {
    console.log(item);
  }
}
