import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'checkerboard',
  templateUrl: './checkerboard.component.html',
  styleUrls: ['./checkerboard.component.css']
})
export class CheckerboardComponent implements OnInit {

  private _count = 0
  @Input()
  set count(value: number) {
    this._count = value;
    this.templateArr = [];
    for( let i = 0; i < value * value; i++) {
      this.templateArr.push(i);
    }
  }
  get count(): number {
    return this._count;
  }

  templateArr: number[] = [];

  constructor() {

  }

  ngOnInit(): void {
  }

}
