import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routers';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserSpeechComponent } from './user-speech/user-speech.component';
import { SpeechListComponent } from './user-speech/speech-list/speech-list.component';
import { SpeechContentComponent } from './user-speech/speech-content/speech-content.component';
import { NewSpeechComponent } from './new-speech/new-speech.component';
import { SearchSpeechComponent } from './search-speech/search-speech.component';

import { SpeechService } from './services/speech.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserSpeechComponent,
    SpeechListComponent,
    SpeechContentComponent,
    NewSpeechComponent,
    SearchSpeechComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    SpeechService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
