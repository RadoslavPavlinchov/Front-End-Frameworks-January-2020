import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icause } from './shared/interfaces/cause';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CausesService {
  causes: Icause[];

  selectedCause: Icause;

  constructor(private http: HttpClient) { }

  loadCauses() {
    this.http.get<Icause[]>('http://localhost:3000/causes').subscribe(causes => {
      this.causes = causes;
    })
  }

  donate(amount: number) {
    return this.http.put<Icause>(`http://localhost:3000/causes/${this.selectedCause._id}`, { 
      body: { collectedAmount: this.selectedCause.collectedAmount + amount } 
    });
  }
}
