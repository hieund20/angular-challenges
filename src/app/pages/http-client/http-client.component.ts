import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { Person, PersonService } from '../../services/person.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // This makes the service available application-wide
})
@Component({
  selector: 'app-http-client',
  imports: [CommonModule],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.scss',
})
export class HttpClientComponent implements OnInit {
  personList$!: Observable<Person[]>;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personList$ = this.personService.getPersonList();
  }
}
