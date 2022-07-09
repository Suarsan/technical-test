import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  private tokenID = 'APP_TK';
  private roleID = 'APP_RO';

  constructor() { }

  public setToken(token: string): void {
    try {
      sessionStorage.setItem(this.tokenID, token);
    } catch (e) {
      console.log('Error saving token at browser')
    }
  }

  public getToken(): string | undefined | null | void {
    try {
      return sessionStorage.getItem(this.tokenID);
    } catch (e) {
      console.log('Error saving token at browser')
    }
  }

  public setRole(role: string): void {
    try {
      sessionStorage.setItem(this.roleID, role);
    } catch (e) {
      console.log('Error saving token at browser')
    }
  }

  public getRole(): string | undefined | null | void {
    try {
      return sessionStorage.getItem(this.roleID);
    } catch (e) {
      console.log('Error saving role at browser')
    }
  }

  public deleteAll() {
    sessionStorage.removeItem(this.tokenID);
    sessionStorage.removeItem(this.roleID);
  }
}
