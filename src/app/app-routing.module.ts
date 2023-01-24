import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent } from './componentiPerRouting/about/about.component';
import { ContactComponent } from './componentiPerRouting/contact/contact.component';
import { ContattoComponent } from './componentiPerRouting/contatto/contatto.component';
import { HomeComponent } from './componentiPerRouting/home/home.component';
import { NotfoundComponent } from './componentiPerRouting/notfound/notfound.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/homepage' },
  { path: 'homepage', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contact',
    component: ContactComponent,canActivate:[AuthGuard],canActivateChild:[AuthGuard],
    children: [{ path: ':id', component: ContattoComponent }],
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
