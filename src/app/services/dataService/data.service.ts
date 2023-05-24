import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.twinny.es'

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {

    const accessToken = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    })
    return this.http.get<any>(`${this.apiUrl}/insights/instagram/account?metrics=reach, impressions, followers`, { headers })


  }

}
