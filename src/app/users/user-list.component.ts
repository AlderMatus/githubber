import { Component, OnInit } from '@angular/core';
import { IUserList } from './user-list';
import { UserService } from './users.service';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: Observable<IUserList[]>;
    page: number;
    errorMessage: String;
    faArrowCircleLeft = faArrowCircleLeft;
    faArrowCircleRight = faArrowCircleRight;
    
    constructor(private userService: UserService) {}

    ngOnInit() {
        this.page = 0;
        this.users = this.userService.getUsers(this.page);
    }

    movePage(value: string) {
        if(value == "next")
            this.page++;
        else
            this.page--;
        this.users = this.userService.getUsers(this.page);
    }
}