import { IUser } from './user';
import { Observable } from 'rxjs';

export interface IUserList {
    login: string;
    id: Number;
    url: string;
    node_id: string;
    info: Observable<IUser>;
}