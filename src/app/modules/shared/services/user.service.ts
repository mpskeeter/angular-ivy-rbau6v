import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, Role, Enrollment } from '../../shared-types';
import { CrudService } from './crud.service';
import { CourseService } from './course.service';
import { rawUsers, rawEnrollments, getRawUser } from './rawData';

@Injectable({ providedIn: 'root' })
export class UserService extends CrudService<User> {
  private _users: Partial<User>[] = rawUsers;

  #currentUser: BehaviorSubject<Partial<User>> = new BehaviorSubject<
    Partial<User>
  >(null);
  public currentUser$: Observable<Partial<User>> =
    this.#currentUser.asObservable();

  #user: BehaviorSubject<Partial<User>> = new BehaviorSubject<Partial<User>>(
    null
  );
  public user$: Observable<Partial<User>> = this.#user.asObservable();

  #users: BehaviorSubject<Partial<User>[]> = new BehaviorSubject<
    Partial<User>[]
  >(null);
  public users$: Observable<Partial<User>[]> = this.#users.asObservable();

  constructor(private courseService: CourseService) {
    super();
    this.getOne(2);
    this.setCurrentUser(2);
  }

  setCurrentUser(id: number = 1): void {
    this.#currentUser.next(this.get(id));
  }

  public getAll(): void {
    this.#users.next(this._users);
  }

  getOne(id: number): void {
    this.#user.next(this.get(id));
  }

  public get(id: number): Partial<User> {
    return this._users.find((user: Partial<User>) => user.id === id);
  }
  public save(user: Partial<User>): void {
    this._users = [
      ...this._users.filter(
        (origUser: Partial<User>) => origUser.id !== user.id
      ),
      user,
    ];
    this.getAll();
    console.log('_users:', this._users);
  }

  public delete(id: number): void {
    const users: Partial<User[]> = this._users.filter(
      (user: Partial<User>) => user.id !== id
    );
    this._users = users;
    this.#users.next(users);
  }

  public HasAnyRole(...rolesToCheck: string[]): Promise<boolean> {
    let result: boolean = true;
    this.user$
      .pipe(
        map((user: User) => {
          if (user.roles && user.roles.length > 0) {
            return rolesToCheck.some(
              (role) =>
                user.roles &&
                user.roles.find(
                  (userRole: Partial<Role>) => userRole.name === role
                )
            );
          } else {
            return false;
          }
        })
      )
      .subscribe((checkResult) => {
        result = checkResult;
      });
    return new Promise<boolean>((resolve, reject) => {
      resolve(result);
    });
  }
}
