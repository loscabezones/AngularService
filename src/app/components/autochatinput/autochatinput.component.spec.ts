import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutochatinputComponent } from './autochatinput.component';

describe('AutochatinputComponent', () => {
  let component: AutochatinputComponent;
  let fixture: ComponentFixture<AutochatinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutochatinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutochatinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
