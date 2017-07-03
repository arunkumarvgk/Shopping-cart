import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "app/user/profile/profile.component";
import { ProfileGuardService } from "app/user/profileGuard.service";

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"profile/:type",component:ProfileComponent,canActivate:[ProfileGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
