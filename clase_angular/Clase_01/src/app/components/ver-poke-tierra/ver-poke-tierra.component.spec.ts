import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPokeTierraComponent } from './ver-poke-tierra.component';
import { MenuComponent } from '../menu/menu.component';
import { mergeNsAndName } from '@angular/compiler';

describe('VerPokeTierraComponent', () => {
  let component: VerPokeTierraComponent;
  let fixture: ComponentFixture<VerPokeTierraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPokeTierraComponent,MenuComponent]
    });
    fixture = TestBed.createComponent(VerPokeTierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
