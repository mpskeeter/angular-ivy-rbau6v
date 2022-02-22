import { BaseName } from './base-name.interface';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tag } from './tag.interface';
import { Course } from './course.interface';
import { PlayListItem } from './play-list-item.interface';
import { FormTableElement } from './form-table-element.interface';
import { convertDate } from './utils';

export interface PlayList extends BaseName {
  // id?: number;
  // name?: string;
  description?: string;
  thumbnail?: string;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  courses?: Partial<Course>[];
  tags?: Partial<Tag>[];
  items?: Partial<PlayListItem>[];
}

export const generatePlayListForm = (
  playlist: Partial<PlayList>,
  fb: FormBuilder
): FormGroup =>
  fb.group({
    id: [playlist?.id],
    name: [playlist?.name],
    description: [playlist?.description],
    thumbnail: [playlist?.thumbnail],
    createdAt: [convertDate(playlist?.createdAt)],
    updatedAt: [convertDate(playlist?.updatedAt)],
  });

export const generatePlayListFromForm = (form: FormGroup): PlayList => {
  const playlist: Partial<PlayList> = {
    id: form.get('id').value,
    name: form.get('name').value,
    description: form.get('description').value,
    thumbnail: form.get('thumbnail').value,
    createdAt: form.get('createdAt').value,
    updatedAt: form.get('updatedAt').value,
  };
  return playlist;
};

export const PlayListElements: Partial<FormTableElement>[] = [
  {
    name: 'name',
    label: 'Playlist Name',
    type: 'text',
    // data: (row: Partial<PlayList>) => row.name,
    required: true,
    tableDisplay: true,
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    // data: (row: Partial<PlayList>) => row.description,
    tableDisplay: true,
  },
  {
    name: 'thumbnail',
    label: 'Tumbnail',
    type: 'text',
    // data: (row: Partial<PlayList>) => row.thumbnail,
    tableDisplay: true,
  },
  {
    name: 'createdAt',
    label: 'Date Created',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    // data: (row: Partial<PlayList>) =>
    //   formatDate(row.createdAt, 'shortDate', 'en-US'),
    tableDisplay: true,
  },
  {
    name: 'updatedAt',
    label: 'Date Updated',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    // data: (row: Partial<PlayList>) =>
    //   formatDate(row.updatedAt, 'shortDate', 'en-US'),
    tableDisplay: true,
  },
];
