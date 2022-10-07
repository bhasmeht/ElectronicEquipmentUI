import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteequipmentcategoryComponent } from './deleteequipmentcategory.component';

describe('DeleteequipmentcategoryComponent', () => {
  let component: DeleteequipmentcategoryComponent;
  let fixture: ComponentFixture<DeleteequipmentcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteequipmentcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteequipmentcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
