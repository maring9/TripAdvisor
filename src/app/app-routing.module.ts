import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlacesComponent} from './pages/places/places.component';
import {PageLayoutComponent} from './components/page-layout/page-layout.component';
import {GetInspiredComponent} from './pages/get-inspired/get-inspired.component';
import {WhereToStayComponent} from './pages/where-to-stay/where-to-stay.component';
import {WhereToEatComponent} from './pages/where-to-eat/where-to-eat.component';
import {SearchComponent} from './pages/search/search.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {RegisterComponent} from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        // component: SearchComponent
        redirectTo: '/places'
      },
      {
        path: 'places',
        component: PlacesComponent
      },
      {
        path: 'where-to-stay',
        component: WhereToStayComponent
      },
      {
        path: 'where-to-eat',
        component: WhereToEatComponent
      },
      {
        path: 'get-inspired',
        component: GetInspiredComponent
      },
    ]
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    data: {
      requireAuth: false
    },
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
