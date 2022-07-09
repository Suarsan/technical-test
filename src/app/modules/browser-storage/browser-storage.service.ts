import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  constructor() { }

  public setToken(token: string): void {
    try {
      sessionStorage.setItem('APP_TK', token);
    } catch (e) {
      console.log('Error saving token at browser')
    }
  }

  public getToken(): string | undefined | null | void {
    try {
      return sessionStorage.getItem('APP_TK');
    } catch (e) {
      console.log('Error saving token at browser')
    }
  }

  public setRole(token: string): void {
    try {
      sessionStorage.setItem('APP_RO', token);
    } catch (e) {
      console.log('Error saving token at browser')
    }
  }

  public getRole(): string | undefined | null | void {
    try {
      return sessionStorage.getItem('APP_RO');
    } catch (e) {
      console.log('Error saving role at browser')
    }
  }
}
