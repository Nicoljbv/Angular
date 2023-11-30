import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPokeFuegoComponent } from './ver-poke-fuego.component';
import { MenuComponent } from '../menu/menu.component';

describe('VerPokeFuegoComponent', () => {
  let component: VerPokeFuegoComponent;
  let fixture: ComponentFixture<VerPokeFuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPokeFuegoComponent, MenuComponent]
    });
    fixture = TestBed.createComponent(VerPokeFuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
