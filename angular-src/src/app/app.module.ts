import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ValidateService } from './services/validate.service';
import { AuthorizationService } from './services/authorization.service';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { SearchRequestsService } from './services/search-requests.service';
import { AdministratorComponent } from './components/adminComponents/administrator/administrator.component';
import { ApproveUsersComponent } from './components/adminComponents/approve-users/approve-users.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'authenticate',
    component: AuthenticateComponent
  },
  {
    path: 'admin',
    component: AdministratorComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    AuthenticateComponent,
    AdministratorComponent,
    ApproveUsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthorizationService, SearchRequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
