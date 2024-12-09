import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) { }

    getPostById(id: number): Observable<any> {
        return this.http.get<any>('assets/data/posts.json').pipe(
            map(data => data.post.find((post: any) => post.id === id))
        );
    }

    getPosts(): Observable<any[]> {
        return this.http.get<any>('assets/data/posts.json').pipe(
            map(response => response.post)
        );
    }

    getProjectById(id: number): Observable<any> {
        return this.http.get<any>('assets/data/projects.json').pipe(
            map(data => data.project.find((project: any) => project.id === id))
        );
    }

    getProjects(): Observable<any[]> {
        return this.http.get<any>('assets/data/projects.json').pipe(
            map(response => response.project)
        );
    }

    getEventById(id: number): Observable<any> {
        return this.http.get<any>('assets/data/events.json').pipe(
            map(data => data.event.find((event: any) => event.id === id))
        );
    }

    getEvents(): Observable<any[]> {
        return this.http.get<any>('assets/data/events.json').pipe(
            map(response => response.event)
        );
    }
}