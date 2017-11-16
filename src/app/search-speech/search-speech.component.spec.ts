import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSpeechComponent } from './search-speech.component';

describe('SearchSpeechComponent', () => {
  let component: SearchSpeechComponent;
  let fixture: ComponentFixture<SearchSpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSpeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
