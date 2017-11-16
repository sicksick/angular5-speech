import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpeechService} from '../../services/speech.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.scss']
})
export class SpeechListComponent implements OnInit, OnDestroy {

  public speeches: any= [];
  public activeId: number;
  public editingId: number;
  private speechSubscribe: any;
  private routerSubscribe: any;

  constructor(private speechService: SpeechService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.speechSubscribe = this.speechService.speechesObservable
      .subscribe(speeches => {
        this.speeches = speeches;
        if (!this.activeId && this.speeches.length !== 0) {
          this.router.navigate(['/speech', this.speeches[0].id]);
        }
      });
    this.routerSubscribe = this.route.params.subscribe(params => {
      this.activeId = +params['id'];
    });
  }

  public speechTitleSave(speech) {
    this.editingId = null;
    this.speechService.saveSpeech(speech);
  }

  public speechTitleEdit(id) {
    this.editingId = id;
  }

  public speechRemove(id) {
    this.speechService.removeSpeech(id);
  }

  public speechShowContent(id) {
    this.router.navigate(['/speech', id]);
  }

  ngOnDestroy() {
    this.speechSubscribe.unsubscribe();
    this.routerSubscribe.unsubscribe();
  }
}
