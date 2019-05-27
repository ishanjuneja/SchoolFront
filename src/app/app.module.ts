import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptor } from './app.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideNavComponent,
    HomeComponent,
    TopNavComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    DataTablesModule,
    ToastrModule.forRoot(),
    Ng2SmartTableModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    { provide: LocationStrategy,
     useClass: HashLocationStrategy 
    },
    {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
