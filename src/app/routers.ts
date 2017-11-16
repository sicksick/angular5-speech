import {Routes} from '@angular/router';
import {UserSpeechComponent} from './user-speech/user-speech.component';
import { NewSpeechComponent } from './new-speech/new-speech.component';
import { SearchSpeechComponent } from './search-speech/search-speech.component';

export const AppRoutes: Routes = [

  { path: 'speech', component: UserSpeechComponent, },
  { path: 'speech/:id', component: UserSpeechComponent, },
  { path: 'new', component: NewSpeechComponent, pathMatch: 'full' },
  { path: 'search', component: SearchSpeechComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'speech/list'}
];
