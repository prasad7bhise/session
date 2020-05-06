import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {RouterModule, Route} from '@angular/router'

import {UserRegisterComponent} from '../app/user/register/register.component'
import {UserLoginComponent} from '../app/user/login/login.component'
import {UserOutputComponent} from '../app//user/output/output.component'


const routes: Route[] = [
{path: '', component: UserLoginComponent},
{path: 'user-login', component: UserLoginComponent},
{path: 'user-registration', component: UserRegisterComponent},
{path: 'user-output', component: UserOutputComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
