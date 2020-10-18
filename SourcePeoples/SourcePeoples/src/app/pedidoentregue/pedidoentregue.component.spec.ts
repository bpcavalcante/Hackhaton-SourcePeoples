import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoentregueComponent } from './pedidoentregue.component';

describe('PedidoentregueComponent', () => {
  let component: PedidoentregueComponent;
  let fixture: ComponentFixture<PedidoentregueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoentregueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoentregueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
