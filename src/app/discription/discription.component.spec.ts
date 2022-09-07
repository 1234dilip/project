import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscriptionComponent } from './discription.component';

describe('DiscriptionComponent', () => {
  let component: DiscriptionComponent;
  let fixture: ComponentFixture<DiscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
