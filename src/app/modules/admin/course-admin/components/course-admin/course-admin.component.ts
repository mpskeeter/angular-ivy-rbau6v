import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CourseService } from '../../../../shared';
import {
  Course,
  FormTableElement,
  CourseElements,
  generateCourseForm,
  generateCourseFromForm,
} from '../../../../shared-types';

@Component({
  selector: 'app-course',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.scss'],
})
export class CourseAdminComponent implements OnInit, OnDestroy {
  course: Partial<Course> = {};
  courseForm: FormGroup;
  form: Partial<FormTableElement>[] = CourseElements;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private service: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        // tap((params: ParamMap) => console.log(params)),
        map((params: ParamMap) => {
          const id = parseInt(params.get('id'), 10);
          this.service.getOne(id);
        })
      )
      .subscribe();

    this.service.course$
      .pipe(takeUntil(this.destroy$))
      .subscribe((course) => (this.course = course));
    this.courseForm = generateCourseForm(this.course, this.fb);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  save(form: FormGroup) {
    const data = generateCourseFromForm(form);
    this.service.save(data);
    this.router.navigate(['/admin/course/list']);
  }
}
