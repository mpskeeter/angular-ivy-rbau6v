import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap } from 'rxjs/operators';
import { CourseService } from '../../../shared';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent {
  constructor(public route: ActivatedRoute, public service: CourseService) {}

  ngOnInit() {
    this.route.paramMap
      // .pipe(tap((params: ParamMap) => console.log('params:', params)))
      .subscribe((params) => {
        const tag = parseInt(params.get('id'), 10);
        if (tag) {
          this.service.getAllForTag(tag);
        } else {
          this.service.getAll();
        }
      });
  }
}
