import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Person {
  id: number;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getPersonList(): Observable<Person[]> {
    return this.http.get<Person[]>('http://127.0.0.1:5000/data');
  }
}
