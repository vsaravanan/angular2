/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HandlenullComponent } from './handlenull.component';

describe('HandlenullComponent', () => {
  let component: HandlenullComponent;
  let fixture: ComponentFixture<HandlenullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlenullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlenullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
