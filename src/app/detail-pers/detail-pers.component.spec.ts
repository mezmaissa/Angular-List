import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPersComponent } from './detail-pers.component';

describe('DetailPersComponent', () => {
  let component: DetailPersComponent;
  let fixture: ComponentFixture<DetailPersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
