import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookShelfComponent } from './view-book-shelf.component';

describe('ViewBookShelfComponent', () => {
  let component: ViewBookShelfComponent;
  let fixture: ComponentFixture<ViewBookShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
