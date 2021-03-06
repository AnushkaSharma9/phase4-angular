import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateComponent } from './components/products/create/create.component';
import { ListComponent } from './components/products/list/list.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsModule } from './components/products/products.module';
import { UpdateComponent } from './components/products/update/update.component';
import { ViewComponent } from './components/products/view/view.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'',redirectTo:'/home' ,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'users',component:UsersComponent},
  {path:'signin',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'products', loadChildren: (()=>import('./components/products/products.module').then(m=>m.ProductsModule))},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ProductsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
