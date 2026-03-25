import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle {
  @Input() name: string = 'Angular';
  constructor(){
    console.log('abc');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngDestroy() {
    console.log('ngDestroy');
  }
}
