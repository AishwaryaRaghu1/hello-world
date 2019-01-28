import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    CatererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
