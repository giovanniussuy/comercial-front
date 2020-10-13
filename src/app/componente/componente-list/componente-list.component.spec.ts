import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteListComponent } from './componente-list.component';

describe('ComponenteListComponent', () => {
  let component: ComponenteListComponent;
  let fixture: ComponentFixture<ComponenteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
