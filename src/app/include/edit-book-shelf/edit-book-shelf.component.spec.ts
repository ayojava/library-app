import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookShelfComponent } from './edit-book-shelf.component';

describe('EditBookShelfComponent', () => {
  let component: EditBookShelfComponent;
  let fixture: ComponentFixture<EditBookShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBookShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
