import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayListService } from '../../../../shared';
import {
  Table,
  PlayListElements,
  FormTableElement,
} from '../../../../shared-types';

@Component({
  selector: 'app-playlist-table',
  templateUrl: './playlist-table.component.html',
  styleUrls: ['./playlist-table.component.scss'],
  providers: [PlayListService],
})
export class PlaylistTableComponent implements OnInit {
  tableColumns: Partial<FormTableElement>[] = PlayListElements;

  constructor(
    public service: PlayListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service.getAll();
  }

  edit($event) {
    this.router.navigate(['../edit', $event], { relativeTo: this.route });
    console.log('edit:', $event);
  }

  delete($event) {
    console.log('delete:', $event);
  }
}
