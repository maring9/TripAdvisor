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

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: PageLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
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
    children: [
      {
        path: 'login',
        component: LoginComponent
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
