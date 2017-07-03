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
import { PhoneListResolver } from "app/phone/phone-list/phone-list-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    EmailValidatorDirective,
    UniquePipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    HttpModule,
    BrowserAnimationsModule,
    UserModule,
    PhoneModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoginService,
    ProfileGuardService,
    ProductService,
    PhoneListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
