import { Component, OnInit } from '@angular/core';
import { IRepository } from './repository';
import { Observable } from 'rxjs';
import { UserService } from './users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './repos-list.component.html',
    styleUrls: []
})
export class ReposListComponent implements OnInit {
    repos: Observable<IRepository[]>;
    username: string;

    constructor(private user: UserService,
        private route: ActivatedRoute) {
            this.route.paramMap.subscribe(
                params => this.username = params.get("username")
            );
        }

    ngOnInit(){
        this.repos = this.user.getUserRepos( this.username );
    }
}