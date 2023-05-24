
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.twinny.es'

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/auth/signin`, { email, password })
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token)
  }

  getToken(): string {
    const token = localStorage.getItem('token')
    if (token !== null) {
      return token
    }
    return ''
  }
}
