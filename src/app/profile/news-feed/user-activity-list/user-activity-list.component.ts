import { Component, OnInit } from '@angular/core';
import { UserActivity } from '../user-activity';

@Component({
  selector: 'cg-user-activity-list',
  templateUrl: './user-activity-list.component.html'
})
export class UserActivityListComponent implements OnInit {
  userActivities: UserActivity[] = [];
  userActivity = new UserActivity('John', '25');

  constructor() { }

  ngOnInit() {
    console.log(this.userActivity);
  }

}
