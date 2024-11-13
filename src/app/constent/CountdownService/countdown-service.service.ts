import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountdownServiceService {

  constructor(private http: HttpClient) {}
  getTimeRemaining(endTime: Date): Observable<any> {
    return interval(1000).pipe(
      map(() => {
        const now = new Date().getTime();
        const distance = endTime.getTime() - now;
        return {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          distance
        };
      })
    );
  }

  changeThemeStatus(): Observable<any> {
    return this.http.post('/path/to/api', {
      action: 'change_theme_status_ajax',
      security: 'your-security-nonce'
    });
  }
}
