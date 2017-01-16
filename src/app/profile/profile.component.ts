import { Component, OnInit } from '@angular/core';
import { Composition } from '../composition';

@Component({
  selector: 'cg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  composition: Composition;
  compositionID: number;

  constructor() { }

  ngOnInit() {
  }

}
