import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  count = 3;


  addOne() {
    this.count++;
  }


  //todo: fix function breakPoint
  breakPoint() {
    let breakPoint;
    for (let i = 0; i < this.count; i++ ) {
      breakPoint =  this.count * i;
      return breakPoint;
      console.log(breakPoint);
    }
    return breakPoint;
  }


}
