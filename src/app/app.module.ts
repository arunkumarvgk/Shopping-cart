import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { appRoutes } from "./app.route";
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EmailValidatorDirective } from "./validators/email-validator.directive";
import { LoginService } from "app/user/login/login.service";
import { UserModule } from "app/user/user.module";
import { ProfileGuardService } from "app/user/profileGuard.service";
import { ProductService } from "app/services/product.service";
import { HttpModule } from "@angular/http";
import { UniquePipe } from './pipes/unique-pipe.pipe';
import { PhoneModule } from "app/phone/phone.module";
import { PhonesResolver } from "app/phone/phone-list/phones-resolver.service";
import { PhoneListResolver } from "app/resolvers/phone-list-resolver.service";
import { myHighlight } from "app/directives/hightlight.directive";
import { AdminModule } from "app/admin/admin.module";
import { PhoneSpecificationValidateDirective } from "app/directives/phone-spec-validator.directive";
import { PhoneDetailResolver } from "app/phone/phone-detail/phone-detail-resolver.service";
import { CustomerService } from "app/services/customer.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    EmailValidatorDirective,
    UniquePipe,
    myHighlight
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserAnimationsModule,
    UserModule,
    PhoneModule,
    AdminModule
  ],
  providers: [
    LoginService,
    ProfileGuardService,
    ProductService,
    PhoneListResolver,
    PhonesResolver,
    PhoneDetailResolver,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
