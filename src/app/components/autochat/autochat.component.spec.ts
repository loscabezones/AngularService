import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutochatComponent } from './autochat.component';

describe('AutochatComponent', () => {
  let component: AutochatComponent;
  let fixture: ComponentFixture<AutochatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutochatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutochatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
