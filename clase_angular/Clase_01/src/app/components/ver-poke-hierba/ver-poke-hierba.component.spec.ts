import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPokeHierbaComponent } from './ver-poke-hierba.component';
import { MenuComponent } from '../menu/menu.component';

describe('VerPokeHierbaComponent', () => {
  let component: VerPokeHierbaComponent;
  let fixture: ComponentFixture<VerPokeHierbaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPokeHierbaComponent,MenuComponent]
    });
    fixture = TestBed.createComponent(VerPokeHierbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
