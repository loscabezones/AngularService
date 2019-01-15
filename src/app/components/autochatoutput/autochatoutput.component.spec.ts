import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutochatoutputComponent } from './autochatoutput.component';

describe('AutochatoutputComponent', () => {
  let component: AutochatoutputComponent;
  let fixture: ComponentFixture<AutochatoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutochatoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutochatoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
