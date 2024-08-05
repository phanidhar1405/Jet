import { TestBed } from '@angular/core/testing';

import { ItemwithoutIDService } from './itemwithout-id.service';

describe('ItemwithoutIDService', () => {
  let service: ItemwithoutIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemwithoutIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
