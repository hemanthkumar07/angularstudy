import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Phone } from '@mui/icons-material';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { AdminComponent } from './admin/admin.component';
import { Adminchild1Component } from './adminchild1/adminchild1.component';
import { Adminchild2Component } from './adminchild2/adminchild2.component';
import { ContactComponent } from './contact/contact.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EmployeddetailComponent } from './employeddetail/employeddetail.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { FormsComponent } from './forms/forms.component';
import { Guard1Guard } from './guard1.guard';
import { Guard2Guard } from './guard2.guard';
import { Guard3Guard } from './guard3.guard';
import { Guard4Guard } from './guard4.guard';
import { HomeComponent } from './home/home.component';
import { Page101Component } from './page101/page101.component';
import { PhoneComponent } from './phone/phone.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  {
    path:"",redirectTo:"employeddetail",pathMatch:"full"
  },
  {
    path:"about",component:AboutComponent
  },{
    path:"forms",component:FormsComponent
  },
  {
    path:"form2",component:Form2Component
  },
  {
    path:"contact",component:ContactComponent,
    children:[
      {
        path:"address",component:AddressComponent
      },
      {
        path:"phone",component:PhoneComponent
      }
    ]
  },{
    path:"reactiveform",component:ReactiveformComponent
  },
  {
    path:"form3",component:Form3Component
  },
  {
    path:"employeddetail",component:EmployeddetailComponent
  },
  {
    path:"databinding",component:DatabindingComponent
  },
  {
    path:"test1",component:Test1Component
  },
  {
    path:"home",component:HomeComponent
  },
  // {
  //   path:"admin",component:AdminComponent,canActivate:[Guard1Guard]
  // },{
  //   path:"adminchild1",component:Adminchild1Component
  // },
  // {
  //   path:"adminchild2",component:Adminchild2Component
  // },
//   {path:"admin",component:AdminComponent,canActivateChild:[Guard2Guard],canActivate:[Guard1Guard],
// children:[
//   {
//   path:"adminchild1",component:Adminchild1Component
// },
// {
//   path:"adminchild2",component:Adminchild2Component
// }
// ]},
{
  path:"admin",component:AdminComponent,canDeactivate:[Guard4Guard],
},

  {
    path:"page101",component:Page101Component
  },
  { path: 'lazyload',canLoad:[Guard3Guard], loadChildren: () => import('./lazyload/lazyload.module').then(m => m.LazyloadModule) },
  {
    path:"**",redirectTo:"page101",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
