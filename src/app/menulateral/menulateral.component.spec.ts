import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulateralComponent } from './menulateral.component';

describe('MenulateralComponent', () => {
  let component: MenulateralComponent;
  let fixture: ComponentFixture<MenulateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenulateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
