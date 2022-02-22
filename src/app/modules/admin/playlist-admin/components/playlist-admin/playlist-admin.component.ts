import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { PlayListService } from '../../../../shared';
import {
  PlayList,
  FormTableElement,
  PlayListElements,
  generatePlayListForm,
  generatePlayListFromForm,
} from '../../../../shared-types';

@Component({
  selector: 'app-playlist-admin',
  templateUrl: './playlist-admin.component.html',
  styleUrls: ['./playlist-admin.component.scss'],
  providers: [PlayListService],
})
export class PlaylistAdminComponent implements OnInit, OnDestroy {
  playlist: Partial<PlayList> = {};
  playlistForm: FormGroup;
  form: Partial<FormTableElement>[] = PlayListElements;

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private fb: FormBuilder,
    private service: PlayListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        // tap((params: ParamMap) => console.log(params)),
        map((params: ParamMap) => {
          const id = parseInt(params.get('id'), 10);
          this.service.getPlaylist(id);
        })
      )
      .subscribe();

    this.service.playlist$
      .pipe(takeUntil(this.destroy$))
      .subscribe((playlist) => (this.playlist = playlist));
    this.playlistForm = generatePlayListForm(this.playlist, this.fb);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  save(form: FormGroup) {
    this.service.save(generatePlayListFromForm(form));
    this.router.navigate(['/admin/playlist/list']);
  }
}
