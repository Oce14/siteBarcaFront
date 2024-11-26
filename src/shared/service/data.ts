import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) { }

    getStepById(id: number): Observable<any> {
        return this.http.get<any>('assets/data/steps.json').pipe(
            map(data => data.step.find((step: any) => step.id === id))
        );
    }

    getSteps(): Observable<any[]> {
        return this.http.get<any>('assets/data/steps.json').pipe(
            map(response => response.step)
        );
    }
}