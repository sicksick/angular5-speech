import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Http} from '@angular/http';

@Injectable()
export class SpeechService {
  private speechesSubject = new BehaviorSubject([]);
  public readonly speechesObservable = this.speechesSubject.asObservable();

  constructor(private http: Http) {
    this.getSpeeches();
  }

  public getSpeeches() {
    return this.http.get('/assets/speech.json')
      .map(res => res.json())
      .subscribe((res: any) => {
        this.speechesSubject.next(res.speeches);
      });
  }

  public getSpeechById(id: number) {
    const speeches: any = this.speechesSubject.getValue().filter(speech => id === +speech.id);
    return speeches[0] || [];
  }

  public saveSpeech(speechForUpdate: any) {
    const speeches: any = this.speechesSubject.getValue();
    for (let i = 0; i < speeches.length; i++) {
      if (speeches[i].id === speechForUpdate.id) {
        speeches[i].content = speechForUpdate.content ? speechForUpdate.content : speeches[i].content;
        speeches[i].author = speechForUpdate.author ? speechForUpdate.author : speeches[i].author;
        speeches[i].keywords = speechForUpdate.keywords ? speechForUpdate.keywords : speeches[i].keywords;
        speeches[i].date = speechForUpdate.date ? speechForUpdate.date : speeches[i].date;
        speeches[i].title = speechForUpdate.title ? speechForUpdate.title : speeches[i].title;
      }
      break;
    }
    this.speechesSubject.next(speeches);
  }


  public removeSpeech(id: number) {
    const speeches = this.speechesSubject.getValue().filter(speech => id !== +speech.id);
    this.speechesSubject.next(speeches);
  }

}
