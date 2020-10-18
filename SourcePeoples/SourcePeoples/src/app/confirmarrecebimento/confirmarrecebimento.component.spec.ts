import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarrecebimentoComponent } from './confirmarrecebimento.component';

describe('ConfirmarrecebimentoComponent', () => {
  let component: ConfirmarrecebimentoComponent;
  let fixture: ComponentFixture<ConfirmarrecebimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarrecebimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarrecebimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
