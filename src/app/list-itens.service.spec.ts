import { TestBed } from '@angular/core/testing';

import { ListItensService } from './list-itens.service';

describe('ListItensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListItensService = TestBed.get(ListItensService);
    expect(service).toBeTruthy();
  });
});
