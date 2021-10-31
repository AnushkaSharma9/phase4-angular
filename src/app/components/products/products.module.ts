import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes=[

    {path:'',component:ProductsComponent},
    {path:'list',component:ListComponent},
    {path:'create',component:CreateComponent},
    {path:'update',component:UpdateComponent},
    {path:'view',component:ViewComponent},

  ];

@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ListComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class ProductsModule { }
