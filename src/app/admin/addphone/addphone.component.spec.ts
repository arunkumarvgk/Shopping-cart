import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphoneComponent } from './addphone.component';

describe('AddphoneComponent', () => {
  let component: AddphoneComponent;
  let fixture: ComponentFixture<AddphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
