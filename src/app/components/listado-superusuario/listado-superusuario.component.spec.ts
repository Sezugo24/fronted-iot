import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSuperusuarioComponent } from './listado-superusuario.component';

describe('ListadoSuperusuarioComponent', () => {
  let component: ListadoSuperusuarioComponent;
  let fixture: ComponentFixture<ListadoSuperusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoSuperusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSuperusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
