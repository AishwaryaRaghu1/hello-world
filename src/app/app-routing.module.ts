import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { CorporateSolutionComponent } from './component/corporate-solution/corporate-solution.component';
import { InitialPageComponent } from './component/initial-page/initial-page.component';
import { BecomeVendorComponent } from './component/become-vendor/become-vendor.component';
import { CatererComponent } from './component/caterer/caterer.component';
import { FindCatererComponent } from './component/find-caterer/find-caterer.component';
import { GetAQuoteComponent } from './component/get-a-quote/get-a-quote.component';
import { FaqsComponent } from './component/faqs/faqs.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'initial-page',
    pathMatch : 'full'
  },
  {
    path : 'initial-page',
    component : InitialPageComponent
  },
  {
    path : 'about-us',
    component : AboutUsComponent
  },
  {
    path : 'become-vendor',
    component : BecomeVendorComponent
  },
  {
    path : 'caterer',
    component : CatererComponent
  },
  {
    path : 'corporate-solution',
    component : CorporateSolutionComponent
  },
  {
    path : 'find-caterer',
    component : FindCatererComponent
  },
  {
    path : 'get-a-quote',
    component : GetAQuoteComponent
  },
  {
    path : 'contact-us',
    component : ContactUsComponent
  },
  {
    path : 'faqs',
    component : FaqsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
