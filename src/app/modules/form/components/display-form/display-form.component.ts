import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormTableElement } from '../../../shared-types';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.scss'],
})
export class DisplayFormComponent {
  @Input() Form: FormGroup;
  @Input() form: Partial<FormTableElement>[] = [];
  @Output() formSave: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  save() {
    this.formSave.emit(this.Form);
  }
}
