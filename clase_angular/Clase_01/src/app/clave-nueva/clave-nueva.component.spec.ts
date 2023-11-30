import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaveNuevaComponent } from './clave-nueva.component';

describe('ClaveNuevaComponent', () => {
  let component: ClaveNuevaComponent;
  let fixture: ComponentFixture<ClaveNuevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaveNuevaComponent]
    });
    fixture = TestBed.createComponent(ClaveNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
