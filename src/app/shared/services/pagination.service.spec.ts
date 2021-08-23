import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { PaginationService } from './pagination.service';


// export class MatDialogMock {​​​
//  open() {​​​
//  return {​​​
//  afterClosed: () => of({​​​ name: 'some object' }​​​)
//  }​​​;
//  }​​​
// }​​​

describe('pagination.service', () => {
  let service: PaginationService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      CommonModule,
      BrowserAnimationsModule,
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]), ],
    providers: [{
      //  provide: HTTP_INTERCEPTORS,
      useClass: PaginationService,
      multi: true
    },
    ]
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
