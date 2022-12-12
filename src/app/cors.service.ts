import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorsService {
  constructor(private http: HttpClient) {}

  public callMethod1() {
    return this.http.get('http://localhost:8085/cors/method1', {
      responseType: 'text',
    });
  }

  public callMethod2() {
    return this.http.get('http://localhost:8085/cors/method2', {
      responseType: 'text',
    });
  }
}
