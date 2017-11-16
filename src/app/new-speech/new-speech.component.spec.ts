import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpeechComponent } from './new-speech.component';

describe('NewSpeechComponent', () => {
  let component: NewSpeechComponent;
  let fixture: ComponentFixture<NewSpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSpeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
