import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { UserService } from '../../../../shared';
import {
  User,
  FormTableElement,
  UserElements,
  generateUserForm,
  generateUserFromForm,
} from '../../../../shared-types';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss'],
  providers: [UserService],
})
export class UserAdminComponent implements OnInit {
  userForm: FormGroup;
  form: Partial<FormTableElement>[] = UserElements;

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.userForm = generateUserForm(this.fb);

    this.service.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => (this.userForm = generateUserForm(this.fb, user)));

    this.route.paramMap
      .pipe(
        // tap((params: ParamMap) => console.log(params)),
        map((params: ParamMap) => {
          const id = parseInt(params.get('id'), 10);
          this.service.getOne(id);
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  save(form: FormGroup) {
    const data = generateUserFromForm(form);
    this.service.save(data);
    this.router.navigate(['/admin/user/list']);
  }
}
