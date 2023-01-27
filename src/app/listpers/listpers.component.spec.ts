import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpersComponent } from './listpers.component';

describe('ListpersComponent', () => {
  let component: ListpersComponent;
  let fixture: ComponentFixture<ListpersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
