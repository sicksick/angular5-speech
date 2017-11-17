import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {SpeechService} from '../services/speech.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-speech',
  templateUrl: './search-speech.component.html',
  styleUrls: ['./search-speech.component.scss']
})
export class SearchSpeechComponent implements OnInit, OnDestroy {

  public searchstring = '';
  public speeches: any = [];
  public speechesDefault: any = [];

  private speechSubscribe: any;
  constructor(private speechService: SpeechService, private router: Router) { }

  ngOnInit() {
    this.speechSubscribe = this.speechService.speechesObservable
      .subscribe(speeches => {
          this.speeches = speeches;
          this.speechesDefault = speeches;
      });
  }


  ngOnDestroy() {
    this.speechSubscribe.unsubscribe();
  }

  public speechSearch(text: any) {
    this.speeches = JSON.parse(JSON.stringify(this.speechesDefault)).filter(function(item){return item.title.toLowerCase().match(text); });
  }

  public speechShowContent(id) {
    this.router.navigate(['/speech', id]);
  }

}
