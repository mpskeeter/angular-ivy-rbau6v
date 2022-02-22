import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../../shared';
import {
  Table,
  CourseElements,
  FormTableElement,
} from '../../../../shared-types';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.scss'],
})
export class CourseTableComponent implements OnInit {
  tableColumns: Partial<FormTableElement>[] = CourseElements;

  constructor(
    public service: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service.getAll();
  }

  edit($event) {
    this.router.navigate(['../edit', $event], { relativeTo: this.route });
  }

  delete($event) {
    console.log('delete:', $event);
    this.service.delete($event);
  }
}
