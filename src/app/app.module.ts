import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './users/user-list.component'
import { StringFormatPipe } from './string-format.pipe'
import { ReposListComponent } from './users/repos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ReposListComponent,
    StringFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UserListComponent },
      { path: 'users/:username/repos', component: ReposListComponent },
    ]),
    NgbDropdownModule,
    NgbButtonsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
