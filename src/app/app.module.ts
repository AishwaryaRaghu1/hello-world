import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './component/initial-page/initial-page.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { CorporateSolutionComponent } from './component/corporate-solution/corporate-solution.component';
import { FindCatererComponent } from './component/find-caterer/find-caterer.component';
import { GetAQuoteComponent } from './component/get-a-quote/get-a-quote.component';
import { FaqsComponent } from './component/faqs/faqs.component';
import { BecomeVendorComponent } from './component/become-vendor/become-vendor.component';
import { CatererComponent } from './component/caterer/caterer.component';
import { CaterersListService } from './services/caterers-list.service';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MenupageComponent } from './component/menupage/menupage.component';

import { GetCatererService } from './services/get-caterer.service';
import { GetMenuListService } from './services/get-menu-list.service';
import { LoginServiceService } from './services/login-service.service';
import { RegistrationServiceService } from './services/registration-service.service';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    CorporateSolutionComponent,
    FindCatererComponent,
    GetAQuoteComponent,
    FaqsComponent,
    BecomeVendorComponent,
    CatererComponent,
    LoginComponent,
    RegisterComponent,
    MenupageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [CaterersListService,
      GetCatererService,
      GetMenuListService,
      LoginServiceService,
      RegistrationServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
