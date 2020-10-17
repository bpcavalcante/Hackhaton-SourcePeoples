import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaspartedoisComponent } from './entregaspartedois.component';

describe('EntregaspartedoisComponent', () => {
  let component: EntregaspartedoisComponent;
  let fixture: ComponentFixture<EntregaspartedoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaspartedoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaspartedoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
