import { Component } from '@angular/core';
import { UserService } from '../../../shared';
import { Enrollment } from '../../../shared-types';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent {
  constructor(public service: UserService) {
    this.service.setCurrentUser(2);
  }

  completed(enrollments: Partial<Enrollment>[]): number {
    return enrollments.filter((enrollment) => enrollment.dateCompleted).length;
  }
  assigned(enrollments: Partial<Enrollment>[]): number {
    return enrollments.filter((enrollment) => enrollment.dateCompleted).length;
  }
  in_progress(enrollments: Partial<Enrollment>[]): number {
    return enrollments.filter((enrollment) => enrollment.dateCompleted).length;
  }
}
