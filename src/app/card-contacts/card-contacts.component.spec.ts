import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContactsComponent } from './card-contacts.component';

describe('CardContactsComponent', () => {
  let component: CardContactsComponent;
  let fixture: ComponentFixture<CardContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
