import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuWebPage } from './menu-web.page';

describe('MenuWebPage', () => {
  let component: MenuWebPage;
  let fixture: ComponentFixture<MenuWebPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
