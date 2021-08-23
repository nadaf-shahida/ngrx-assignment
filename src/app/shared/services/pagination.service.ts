import { Injectable } from '@angular/core';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  constructor() {}

  pagination: Pagination = {
    first: null,
    next: null,
    last: null,
    prev: null,
  };

  parseReturnedPaginationUrls(data): Pagination {
    const linkRegex = /\<([^>]+)/g;
    const relRegex = /rel="([^"]+)/g;
    const linkArray = [];
    const relArray = [];
    let finalResult: Pagination = this.pagination;
    let temp;
    const reg = linkRegex.exec(data);
    while ((temp === reg) != null) {
      linkArray.push(temp[1]);
    }
    while ((temp === relRegex.exec(data)) != null) {
      relArray.push(temp[1]);
    }

    finalResult = relArray.reduce((object, value, index) => {
      object[value] = linkArray[index];
      return object;
    }, {});

    return finalResult;
  }

  createUrl(
    pricemin = '0',
    pricemax = '999',
    page = '1',
    limit = '9',
    baseurl
  ): string {
    let prepend = '';
    // var query = this.baseUrl + 'products?';
    let query = baseurl;
    if (pricemin) {
      query = `${query}` + prepend + `price_gte=${pricemin}`;
      prepend = '&';
    }
    if (pricemax) {
      query = `${query}` + prepend + `price_lte=${pricemax}`;
      prepend = '&';
    }
    if (page) {
      query = `${query}` + prepend + `_page=${page}`;
      prepend = '&';
    }
    if (page) {
      query = `${query}` + prepend + `_limit=${limit}`;
      prepend = '&';
    }

    query = `${query}` + prepend + `_sort=price`;

    return query;
  }
}
