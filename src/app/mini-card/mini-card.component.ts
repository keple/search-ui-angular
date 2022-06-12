import {Component, Input, OnInit} from '@angular/core';
import {ResourceMap} from '../../resources/resource.map';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css'],
  animations: [
    trigger('hoverButton' , [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(80%)'})),
      transition('in => out', animate('0.8s linear')),
      transition('out => in', animate('0s linear'))
    ])
  ]
})
export class MiniCardComponent implements OnInit {

  @Input() title: string;
  @Input() backgroundUrl: string;
  @Input() color: string;
  @Input() resourceName: string;
  @Input() backgroundResource: string;
  constructor(private resourceMap: ResourceMap) { }
  isHover: boolean;
  interval: number;
  state: string;
  ngOnInit(): void {
    this.resourceMap.get(this.resourceName);
    this.state = 'in';
  }
  active(){
    this.state = 'out';
    this.isHover = true;
  }
  inActive() {
    this.state = 'in';
    this.isHover = false;
  }
  onEnd($event){
    if (this.isHover) {
      if ($event.toState === 'out') {
        this.state = 'in';
      }
      else {
        this.state = 'out';
      }
    }
  }

}
