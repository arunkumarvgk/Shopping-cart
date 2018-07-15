import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { NavComponent } from "app/nav/nav.component";
import { PhoneListResolver } from "app/resolvers/phone-list-resolver.service";
import { AdminComponent } from "app/admin/admin.component";

export const appRoutes: Routes = [
  
  { path: "Home", component: HomeComponent },
  { path: "user", loadChildren:"app/user/user.module#UserModule"},
  { path: "phone", loadChildren:"app/phone/phone.module#PhoneModule"},
  { path: "admin", loadChildren:"app/admin/admin.module#AdminModule"},
  { path: "", redirectTo: "/Home", pathMatch: "full" }
];
