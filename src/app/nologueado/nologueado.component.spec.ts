import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NologueadoComponent } from './nologueado.component';

describe('NologueadoComponent', () => {
  let component: NologueadoComponent;
  let fixture: ComponentFixture<NologueadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NologueadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NologueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
