import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEditComponent } from './componente-edit.component';

describe('ComponenteEditComponent', () => {
  let component: ComponenteEditComponent;
  let fixture: ComponentFixture<ComponenteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
