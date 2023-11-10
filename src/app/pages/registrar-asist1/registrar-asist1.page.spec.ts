import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarAsist1Page } from './registrar-asist1.page';

describe('RegistrarAsist1Page', () => {
  let component: RegistrarAsist1Page;
  let fixture: ComponentFixture<RegistrarAsist1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarAsist1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
