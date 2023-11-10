import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecerWebPage } from './restablecer-web.page';

describe('RestablecerWebPage', () => {
  let component: RestablecerWebPage;
  let fixture: ComponentFixture<RestablecerWebPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestablecerWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
