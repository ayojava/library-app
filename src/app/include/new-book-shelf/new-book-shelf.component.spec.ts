import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookShelfComponent } from './new-book-shelf.component';

describe('NewBookShelfComponent', () => {
  let component: NewBookShelfComponent;
  let fixture: ComponentFixture<NewBookShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBookShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
