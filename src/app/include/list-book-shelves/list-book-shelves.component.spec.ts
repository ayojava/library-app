import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookShelvesComponent } from './list-book-shelves.component';

describe('ListBookShelvesComponent', () => {
  let component: ListBookShelvesComponent;
  let fixture: ComponentFixture<ListBookShelvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBookShelvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookShelvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
