import { IRepository } from './repository';

export interface IUser {
    login: string;
    id: Number;
    node_id: string;
    html_url: string;
    url: string;
    avatar_url: string;
    company: string;
    location: string;
    followers: Number;
    following: Number;
    subscriptions_url: string;
    organizations_url: string;
    bio: string;
    public_repos: Number;
    repos_url: string;
    repositories: IRepository[];
}