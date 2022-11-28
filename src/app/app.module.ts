import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { Page101Component } from './page101/page101.component';
import { AddressComponent } from './address/address.component';
import { PhoneComponent } from './phone/phone.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test1/test2/test2.component';
import { SquarePipe } from './square.pipe';
import { TitlecasePipe } from './titlecase.pipe';
import { FilterPipe } from './filter.pipe';
import { AdminComponent } from './admin/admin.component';
import { Adminchild1Component } from './adminchild1/adminchild1.component';
import { Adminchild2Component } from './adminchild2/adminchild2.component';
import { FormsComponent } from './forms/forms.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AuthService } from './auth.service';
import { EmployeddetailComponent } from './employeddetail/employeddetail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    Page101Component,
    AddressComponent,
    PhoneComponent,
    DatabindingComponent,
    HomeComponent,
    Test1Component,
    Test2Component,
    SquarePipe,
    TitlecasePipe,
    FilterPipe,
    AdminComponent,
    Adminchild1Component,
    Adminchild2Component,
    FormsComponent,
    Form2Component,
    Form3Component,
    ReactiveformComponent,
    EmployeddetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
