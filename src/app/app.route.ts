import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "Home", component: HomeComponent },
  { path: "user", loadChildren:"app/user/user.module#UserModule"},
  { path: "phone", loadChildren:"app/phone/phone.module#PhoneModule"}
];
