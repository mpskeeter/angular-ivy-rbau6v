import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../shared';
import {
  FormTableElement,
  Table,
  User,
  UserElements,
} from '../../../../shared-types';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  tableColumns: Partial<FormTableElement>[] = UserElements;

  constructor(
    public service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service.getAll();
  }

  edit($event: number) {
    this.router.navigate(['../edit', $event], { relativeTo: this.route });
  }
  delete($event: number) {
    console.log('delete:', $event);
  }
}
