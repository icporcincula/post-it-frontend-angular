import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MatIconModule } from '@angular/material/icon';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MatButtonModule } from '@angular/material/button';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IndexComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
