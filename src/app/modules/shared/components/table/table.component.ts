import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormTableElement } from '../../../shared-types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() tableColumns: Partial<FormTableElement>[] = [];
  @Input() data: Partial<unknown>[] = [];
  @Output() edit: EventEmitter<number> = new EventEmitter<number>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
}
