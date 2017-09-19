import {Component, ViewChild, ElementRef, Input} from '@angular/core';
import { AfterViewInit } from '@angular/core';

/**
 * Generated class for the BaloonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'baloons',
  templateUrl: 'baloons.html',
})
export class Baloons implements AfterViewInit{

  @ViewChild('baloonsDiv') baloonsDiv:ElementRef;
  @Input()
  count:number = 10;

  @Input()
  bgUrl:string;

  constructor() {
  }

   ngAfterViewInit() {

    console.log('ionViewWillEnter BaloonsPage');
    //start the baloons animation
    for (let i = 0; i< this.count; i++){
      let baloon = document.createElement("div");
      baloon.classList.add("balloon");
      baloon.classList.add("balloon"+i);
      this.baloonsDiv.nativeElement.append(baloon);
    }
  }
}
