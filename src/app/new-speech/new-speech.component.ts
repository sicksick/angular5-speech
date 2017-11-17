import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpeechService} from '../services/speech.service';
import {Router} from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-new-speech',
  templateUrl: './new-speech.component.html',
  styleUrls: ['./new-speech.component.scss']
})
export class NewSpeechComponent implements OnInit, OnDestroy {
  public date = new Date();
  public newSpeechId: number = null;
  public alertMessage= false;
  private subscription: Subscription;
  private timer: Observable<any>;
  public alertText= '';
  public speech = {
    content: null,
    author: null,
    keywords: null,
    date: this.date.getFullYear() + '-' + ('0' + (this.date.getMonth() + 1)).slice(-2) + '-' + ('0' + this.date.getDate()).slice(-2),
    title: null
  };

  constructor(private speechService: SpeechService, private router: Router) {
  }

  ngOnInit() {
  }

  public ngOnDestroy() {
    if ( this.subscription && this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
  }


  public new() {
    this.newSpeechId = this.speechService.addSpeech(this.speech);
    this.speech = {
      content: null,
      author: null,
      keywords: null,
      date: this.date.getFullYear() + '-' + ('0' + (this.date.getMonth() + 1)).slice(-2) + '-' + ('0' + this.date.getDate()).slice(-2),
      title: null
    };
    this.showAlert('Speech created.');
  }

  public checkField() {
    if (this.speech.content === null || this.speech.content.trim() === '') {
      return true;
    }

    if (this.speech.title === null || this.speech.title.trim() === '') {
      return true;
    }

    return false;
  }

  public goToNew() {
    this.router.navigate(['/speech/', this.newSpeechId]);
  }

  public showAlert(text) {
    this.alertText = text;
    this.alertMessage = true;
    this.timer = Observable.timer(5000);
    this.subscription = this.timer.subscribe(() => {
      this.alertMessage = false;
      this.alertText = '';
    });
  }

}
