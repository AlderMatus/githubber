import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from './user';
import { IUserList } from './user-list';
import { IRepository } from './repository';
import { StringFormatPipe } from '../string-format.pipe'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private usersUrl = environment.apiUrl + "/users";
    private usersInfoUrl = environment.apiUrl + "/users/{0}";
    private usersReposUrl = environment.apiUrl + "/users/{0}/repos";
    private headers = new HttpHeaders();
    
    constructor(private http: HttpClient,
        private format: StringFormatPipe) {
        this.headers.set('Content-type', 'application/json; charset=utf-8');
    }
    
    getUsers(page: number): Observable<IUserList[]> {
        
        const params = new HttpParams().set('since', (page*30).toString());
            
        return this.http.get<IUserList[]>(this.usersUrl, { headers: this.headers, params: params }).pipe(
            map((u:IUserList[]) => {
                return u.map((usr:IUserList) => {
                    usr.info = this.getUserInfo(usr.login);
                    return usr;
                })
            })
        );
    }

    getUserInfo(username: string): Observable<IUser> {
        return this.http.get<IUser>(this.format.transform(this.usersInfoUrl, username), { headers: this.headers });
    }

    getUserRepos(username: string): Observable<IRepository[]> {
        return this.http.get<IRepository[]>(this.format.transform(this.usersReposUrl, username));
    }
}
