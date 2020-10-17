import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasentregaComponent } from './minhasentrega.component';

describe('MinhasentregaComponent', () => {
  let component: MinhasentregaComponent;
  let fixture: ComponentFixture<MinhasentregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhasentregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
