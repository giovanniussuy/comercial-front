import { TestBed } from '@angular/core/testing';
import { ComponenteService } from './componente.service';

describe('ComponenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponenteService = TestBed.get(ComponenteService);
    expect(service).toBeTruthy();
  });
});
