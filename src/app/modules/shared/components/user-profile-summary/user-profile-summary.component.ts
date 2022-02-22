import { Component, Input } from '@angular/core';
import { User } from '../../../shared-types';

@Component({
  selector: 'app-user-profile-summary',
  templateUrl: './user-profile-summary.component.html',
})
export class UserProfileSummaryComponent {
  @Input() profile: Partial<User> = {};
}
