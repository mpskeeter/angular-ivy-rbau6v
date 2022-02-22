import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap } from 'rxjs/operators';
import { CourseService } from '../../../shared';

@Component({
  selector: 'app-course-category-list',
  templateUrl: './course-category-list.component.html',
})
export class CourseCategoryListComponent implements OnInit {
  constructor(public route: ActivatedRoute, public service: CourseService) {}

  ngOnInit() {
    this.route.paramMap
      // .pipe(tap((params: ParamMap) => console.log('params:', params)))
      .subscribe((params) => {
        const tag = parseInt(params.get('id'), 10);
        if (tag) {
          this.service.getAllForCategory(tag);
        } else {
          this.service.getAll();
        }
      });
  }
}
