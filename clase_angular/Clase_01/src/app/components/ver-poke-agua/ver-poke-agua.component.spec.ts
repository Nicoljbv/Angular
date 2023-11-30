import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from '../menu/menu.component';

import { VerPokeAguaComponent } from './ver-poke-agua.component';

describe('VerPokeAguaComponent', () => {
  let component: VerPokeAguaComponent;
  let fixture: ComponentFixture<VerPokeAguaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPokeAguaComponent, MenuComponent]
    });
    fixture = TestBed.createComponent(VerPokeAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
