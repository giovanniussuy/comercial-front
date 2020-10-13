import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumnSort, PoTableColumnSortType } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {

  constructor(private http: HttpClient) { }

  public get(page: number = 1, pageSize: number = 20): Observable<any> {       
    return this.http.get<any>(`${environment.apiBaseUrl}/componente?page=${page}&pageSize=${pageSize}`);    
  }

  
  public getById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/componente/${id}`);
  }

  public create(componente: any): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/componente`, componente);
  }

  public update(componente: any, id: string): Observable<any> {
    return this.http.put<any>(`${environment.apiBaseUrl}/componente/${id}`, componente);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiBaseUrl}/componente/${id}`);
  }
}
