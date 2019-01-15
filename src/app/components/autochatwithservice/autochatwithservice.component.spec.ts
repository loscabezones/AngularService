import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutochatwithserviceComponent } from './autochatwithservice.component';

describe('AutochatwithserviceComponent', () => {
  let component: AutochatwithserviceComponent;
  let fixture: ComponentFixture<AutochatwithserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutochatwithserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutochatwithserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
