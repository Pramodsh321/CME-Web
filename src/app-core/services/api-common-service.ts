import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiCommonService {

  baseUrl = 'https://localhost:44384/api/';
  tenantId = 1;

  constructor(
    private http: HttpClient) {
  }

  /**
   * Get all records (Dropdowns, Search, and etc...).
   * @param url  API url
   */
  get(url: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }

  /**
   * Get grid records with pagination and filters.
   * @param url API url
   * @param event Kendu grid event
   */
  getGridRecords(url: string, event: any, searchQuery?: string, statusQuery?: string, filterQuery?: string): Observable<any> {
    return this.get(
      `${url}?Results=${event.take}&Page=${event.skip}&OrderBy=${event.sort[0].field}&SortOrder=${event.sort[0].dir}&TenantId=${this.tenantId}${searchQuery}${statusQuery}${filterQuery}`,
    );
  }

  /**
   * Find record by id
   * @param url  API url
   * @param id Record id
   */
  getRecord(url: string, id: any): Observable<any> {
    return this.get(`${url}/${id}`);
  }

  /**
   * Create a new record.
   * @param url API url.
   * @param input Form data.
   */
  post(url: string, input: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, input).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }

  /**
   * Update the specified record.
   * @param url API url.
   * @param input Form data.
   */
  update(url: string, input: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${url}`, input).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }

  /**
   * Delete the specified record.
   * @param url API url.
   * @param deleteList Record Id(s)
   */
  delete(url: string, deleteList: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}/delete`, { ids: deleteList }).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }

  export(url: string, event: any, searchQuery?: string, statusQuery?: string, filterQuery?: string): Observable<any> {
    return this.http
      .get(
        `${this.baseUrl}${url}?Results=${event.take}&Page=${event.skip}&OrderBy=${event.sort[0].field}&SortOrder=${event.sort[0].dir}&TenantId=${this.tenantId}&${searchQuery}${statusQuery}${filterQuery}`,
        {
          observe: 'response',
          responseType: 'blob',
        },
      )
      .pipe(
        map((response: any) => {
          return response;
        }),
      );
  }

  /**
   * Create a new record.
   * @param url API url.
   * @param input Form data.
   */
  put(url: string, input: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${url}`, input).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }


  fileDownload(url: string): Observable<any> {
    return this.http
      .get(
        `${this.baseUrl}${url}`,
        {
          observe: 'response',
          responseType: 'blob',
        },
      )
      .pipe(
        map((response: any) => {
          return response;
        }),
      );
  }

  fileDownloadForPost(url: string, input: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, input, {
      observe: 'response',
      responseType: 'blob',
    }).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }
}
