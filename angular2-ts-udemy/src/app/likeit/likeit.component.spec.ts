/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LikeitComponent } from './likeit.component';

describe('LikeitComponent', () => {
  let component: LikeitComponent;
  let fixture: ComponentFixture<LikeitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
