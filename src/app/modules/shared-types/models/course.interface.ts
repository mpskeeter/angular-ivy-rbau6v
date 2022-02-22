import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseName } from './base-name.interface';
import { CourseCategory } from './course-category.interface';
import { FormTableElement } from './form-table-element.interface';
import { PlayList } from './play-list.interface';
import { Status } from './status.interface';
import { Tag } from './tag.interface';

import { rawStatus, getRawStatus } from '../../shared/services/rawData';

import { convertDate } from './utils';

export interface Course extends BaseName {
  // id?: number;
  // name?: string;
  subject?: string;
  image?: string;
  description?: string;
  duration?: string;
  provider?: string;
  datePublished?: Date;
  dateUpdated?: Date;
  rating?: number;
  playlistId?: number;
  statusId?: number;

  tags?: Partial<Tag>[];
  categories?: Partial<CourseCategory>[];
  playlist?: Partial<PlayList>;
  status?: Partial<Status>;
}

export const generateCourseForm = (
  course: Partial<Course>,
  fb: FormBuilder
): FormGroup =>
  fb.group({
    id: [course?.id],
    name: [course?.name],
    subject: [course?.subject],
    image: [course?.image],
    description: [course?.description],
    statusId: [course?.statusId],
    status: [course.status],
    duration: [course?.duration],
    provider: [course?.provider],
    datePublished: [convertDate(course?.datePublished)],
    dateUpdated: [convertDate(course?.dateUpdated)],
    rating: [course?.rating],
    playlistId: [course?.playlistId],
  });

export const generateCourseFromForm = (form: FormGroup): Partial<Course> => ({
  id: form.get('id').value,
  name: form.get('name').value,
  subject: form.get('subject').value,
  image: form.get('image').value,
  description: form.get('description').value,
  statusId: parseInt(form.get('statusId').value, 10),
  status: getRawStatus(parseInt(form.get('statusId').value, 10)),
  duration: form.get('duration').value,
  provider: form.get('provider').value,
  datePublished: form.get('datePublished').value,
  dateUpdated: form.get('dateUpdated').value,
  rating: form.get('rating').value,
  playlistId: form.get('playlistId').value,
});

export const CourseElements: Partial<FormTableElement>[] = [
  {
    name: 'name',
    label: 'Course Name',
    type: 'text',
    required: true,
    tableDisplay: true,
  },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    tableDisplay: true,
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    tableDisplay: true,
  },
  {
    name: 'statusId',
    label: 'Status',
    type: 'select',
    options: rawStatus,
    data: (row: Partial<Course>) => getRawStatus(row.statusId).name,
    tableDisplay: true,
  },
  {
    name: 'duration',
    label: 'Duration',
    type: 'text',
    tableDisplay: false,
  },
  {
    name: 'provider',
    label: 'Provider',
    type: 'text',
    tableDisplay: false,
  },
  {
    name: 'datePublished',
    label: 'Date Published',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
  },
  {
    name: 'dateUpdated',
    label: 'Date Updated',
    type: 'date',
    dateFormat: 'yyyy-MM-dd',
    tableDisplay: true,
  },
];
