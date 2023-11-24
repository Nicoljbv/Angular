import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPokemonComponent } from './tabla-pokemon.component';

describe('TablaPokemonComponent', () => {
  let component: TablaPokemonComponent;
  let fixture: ComponentFixture<TablaPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPokemonComponent]
    });
    fixture = TestBed.createComponent(TablaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
