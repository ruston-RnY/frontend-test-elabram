import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  dataUser: any;

  constructor() {}

  setDataUser(data: any) {
    localStorage.setItem('dataUser', JSON.stringify(data));
  }

  getDataUser() {
    const data: any = localStorage.getItem('dataUser');
    return (this.dataUser = JSON.parse(data));
  }

  static isLoggedIn(): boolean {
    const data: any = sessionStorage.getItem('isLogin');
    return !!JSON.parse(data);
  }
}
