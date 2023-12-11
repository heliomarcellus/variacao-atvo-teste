// consulta-ativo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultaAtivoService {
  private apiUrl = 'http://localhost:4567/api/yahoo-finance/';

  constructor(private http: HttpClient) {}

  getAtivoData(symbol: string): Observable<any> {
    const url = `${this.apiUrl}${symbol}`;
    return this.http.get(url);
  }
}
