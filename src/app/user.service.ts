import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';
import { fromJS, Map } from 'immutable';

const apiUrl = 'http://localhost:3000';
export const jsonHeaders = new Headers({ 'Content-Type': 'application/json' });
export const authSetDataOptions = new RequestOptions({ headers: jsonHeaders, withCredentials: true });

@Injectable()
export class UserService {

  private _state: BehaviorSubject<Map<string, any>> = new BehaviorSubject(fromJS({
    jwt: undefined,
    matchProfile: {
      ageRanges: [],
      calendar: [],
      culture: [],
      education: '',
      location: [],
      size: [],
      states: [],
      training: [],
      type: [],
    }
  }));

  constructor(private http: Http) { }

  get state() {
    return this._state.asObservable();
  }

  login(username: string, password: string) {
    const payload = {
      username,
      password
    };
    return this.http.post(`${apiUrl}/login`, payload, new RequestOptions({ headers: jsonHeaders }))
    .map(response => {
      if (response.ok) {
        const json = response.json();
        this._state.next(this._state.getValue().set('jwt', json));
        return json;
      }
      throw response;
    });
  }

  logout() {
    return this.http.get(`${apiUrl}/logout`)
    .map(response => {
      if (response.ok) {
        const json = response.json();
        this._state.next(this._state.getValue().set('jwt', undefined));
        return json;
      }
      throw response;
    });
  }

  checkIfAuthenticated() {
    return this.http.get(`${apiUrl}/checkAuth`)
    .map(response => {
      if (response.ok) {
        const json = response.json();
        this._state.next(this._state.getValue().set('jwt', json));
        return json;
      }
      throw response;
    });
  }

  updateMatchProfile(key, value) {
    this._state.next(this._state.getValue().setIn(['matchProfile', key], value));
  }

}
