import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneListComponent } from "app/phone/phone-list/phone-list.component";
import { PhoneListResolver } from "app/phone/phone-list/phone-list-resolver.service";

const routes: Routes = [
    {path:"list/:brandName",component:PhoneListComponent,resolve:{products:PhoneListResolver}}
];
                                                                                                                              
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneRoutingModule { }
