import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPokemonComponent } from './ver-pokemon.component';

describe('VerPokemonComponent', () => {
  let component: VerPokemonComponent;
  let fixture: ComponentFixture<VerPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPokemonComponent]
    });
    fixture = TestBed.createComponent(VerPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
