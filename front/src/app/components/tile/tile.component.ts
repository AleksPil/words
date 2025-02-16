import {Component, OnInit} from '@angular/core';
import {MatRipple} from '@angular/material/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-tile',
  imports: [
    MatRipple
  ],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css',
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class TileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  flip: string = 'inactive';

  toggleFlip(event:any) {
    console.log('flip', event);
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }
}
