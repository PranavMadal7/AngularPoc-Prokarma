import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returned Observable should match the right data', () => {
    const books = [
      {
        id: '0BSOg0oHhZ0C',
        authors: ['sfs', 'sfsf'],
        title: 'Angular Momentum in Quantum Mechanics',
        publisher: 'Princeton University Press',
        description:
          'This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-component system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.',
        pageCount: 146,
        averageRating: 4,
        imageLinks:
          'http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        language: 'en',
      },
    ];
    service.onSearch('java').subscribe((courseData) => {
      expect(courseData.items[0].id).toEqual('0BSOg0oHhZ0C');
    });

    const req = httpTestingController.expectOne(
      'http://localhost:5000/api/books/java'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(books);
  });
});
