import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes : Routes = [
   {path : '', component : HomeComponent},
   {path : 'register', component : RegisterComponent},
   {path : 'login', component : LoginComponent},
   {path : 'dashboard', component : DashboardComponent},
   {path : 'profile', component : ProfileComponent},
   {path : 'contact' , component : ContactComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
