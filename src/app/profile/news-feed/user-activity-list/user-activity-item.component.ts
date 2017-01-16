import { Component, OnInit, Input } from '@angular/core';
import { UserActivity } from '../user-activity';

@Component({
  selector: 'cg-user-activity-item',
  templateUrl: './user-activity-item.component.html'
})
export class UserActivityItemComponent implements OnInit {
  @Input() userActivity: UserActivity;

  constructor() { }

  ngOnInit() {
    console.log(this.userActivity);
  }

}
