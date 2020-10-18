import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarentregaComponent } from './confirmarentrega.component';

describe('ConfirmarentregaComponent', () => {
  let component: ConfirmarentregaComponent;
  let fixture: ComponentFixture<ConfirmarentregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarentregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
