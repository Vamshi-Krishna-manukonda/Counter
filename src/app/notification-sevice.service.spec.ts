import { TestBed } from '@angular/core/testing';

import { NotificationSeviceService } from './notification-sevice.service';

describe('NotificationSeviceService', () => {
  let service: NotificationSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
