import {Routes} from '@angular/router';
import {UserSpeechComponent} from './user-speech/user-speech.component';
import { NewSpeechComponent } from './new-speech/new-speech.component';
import { SearchSpeechComponent } from './search-speech/search-speech.component';

export const AppRoutes: Routes = [

  { path: 'speech', component: UserSpeechComponent },
  { path: 'speech/new', component: NewSpeechComponent },
  { path: 'speech/search', component: SearchSpeechComponent },
  { path: '**', redirectTo: 'speech'}
];
