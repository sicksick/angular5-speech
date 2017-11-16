import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpeechService} from '../../services/speech.service';

@Component({
  selector: 'app-speech-content',
  templateUrl: './speech-content.component.html',
  styleUrls: ['./speech-content.component.scss']
})
export class SpeechContentComponent implements OnInit, OnDestroy {

  private routerSubscribe: any;
  private speechSubscribe: any;
  private id: number;
  public speech: any = {};

  constructor(private route: ActivatedRoute, private speechService: SpeechService) {
  }

  ngOnInit() {
    this.speechSubscribe = this.speechService.speechesObservable
      .subscribe(speeches => {
        this.routerSubscribe = this.route.params.subscribe(params => {
          this.id = +params['id'];
          this.speech = this.speechService.getSpeechById(this.id);
        });
      });
  }

  ngOnDestroy() {
    this.routerSubscribe.unsubscribe();
    this.speechSubscribe.unsubscribe();
  }

  public save() {
    this.speechService.saveSpeech(this.speech);
  }
}
