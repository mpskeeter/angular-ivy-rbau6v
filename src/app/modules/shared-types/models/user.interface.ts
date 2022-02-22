import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseName } from './base-name.interface';
import { Role } from './role.interface';
import { FormTableElement } from './form-table-element.interface';
import { Enrollment } from './enrollment.interface';

export interface User extends BaseName {
  // id?: number;
  guid?: string;
  // name?: string;
  lastName?: string;
  firstName?: string;
  middleName?: string;
  displayName?: string;
  emailAddress?: string;
  distinguishedName?: string;
  samAccountName?: string;
  userPrincipalName?: string;
  voiceTelephoneNumber?: string;
  socketName?: string;
  picture?: string;
  color?: string;
  status?: string;

  roles?: Partial<Role>[];
  enrollments?: Partial<Enrollment>[];
}

export const generateUserForm = (
  fb: FormBuilder,
  user: Partial<User> = {}
): FormGroup =>
  fb.group({
    id: [user?.id],
    guid: [user?.guid],
    name: [user?.name],
    lastName: [user?.lastName],
    firstName: [user?.firstName],
    middleName: [user?.middleName],
    displayName: [user?.displayName],
    emailAddress: [user?.emailAddress],
    distinguishedName: [user?.distinguishedName],
    samAccountName: [user?.samAccountName],
    userPrincipalName: [user?.userPrincipalName],
    voiceTelephoneNumber: [user?.voiceTelephoneNumber],
    socketName: [user?.socketName],
    picture: [user?.picture],
    color: [user?.color],
    status: [user?.status],
  });

export const generateUserFromForm = (form: FormGroup): Partial<User> => ({
  id: form.get('id').value,
  guid: form.get('guid').value,
  name: form.get('name').value,
  lastName: form.get('lastName').value,
  firstName: form.get('firstName').value,
  middleName: form.get('middleName').value,
  displayName: form.get('displayName').value,
  emailAddress: form.get('emailAddress').value,
  distinguishedName: form.get('distinguishedName').value,
  samAccountName: form.get('samAccountName').value,
  userPrincipalName: form.get('userPrincipalName').value,
  voiceTelephoneNumber: form.get('voiceTelephoneNumber').value,
  socketName: form.get('socketName').value,
  picture: form.get('picture').value,
  color: form.get('color').value,
  status: form.get('status').value,
});

export const UserElements: Partial<FormTableElement>[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    tableDisplay: true,
  },
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    tableDisplay: true,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'textarea',
    tableDisplay: true,
  },
  {
    name: 'middleName',
    label: 'Middle Name',
    type: 'text',
    tableDisplay: false,
  },
  {
    name: 'displayName',
    label: 'Display Name',
    type: 'text',
    tableDisplay: true,
  },
  {
    name: 'emailAddress',
    label: 'Email Address',
    type: 'text',
    tableDisplay: false,
  },
  {
    name: 'distinguishedName',
    label: 'Distinguished Name',
    type: 'text',
    tableDisplay: false,
  },
  {
    name: 'samAccountName',
    label: 'SAM Account Name',
    type: 'text',
    tableDisplay: false,
  },
  {
    name: 'userPrincipalName',
    label: 'User Princpal Name',
    type: 'text',
    tableDisplay: false,
  },
  {
    name: 'voiceTelephoneNumber',
    label: 'Voice Telephone Number',
    type: 'text',
    tableDisplay: false,
  },
  {
    name: 'picture',
    label: 'Image',
    type: 'text',
    tableDisplay: false,
  },
  {
    name: 'color',
    label: 'User Color',
    type: 'text',
    tableDisplay: true,
  },
];
