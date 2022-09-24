import { ComponentFixture, TestBed } from '@angular/core/testing';

import { crudComponent } from './crud.component';

describe('CrudComponent', () => {
  let component: crudComponent;
  let fixture: ComponentFixture<crudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ crudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(crudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
