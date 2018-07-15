import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneListComponent } from "app/phone/phone-list/phone-list.component";
import { PhonesResolver } from "app/phone/phone-list/phones-resolver.service";
import { PhoneDetailComponent } from 'app/phone/phone-detail/phone-detail.component';
import { PhoneDetailResolver } from 'app/phone/phone-detail/phone-detail-resolver.service';

const routes: Routes = [
    {path:"list/:brandName",component:PhoneListComponent,resolve:{phones:PhonesResolver}},
    {path:"list/:brandName/:version",component:PhoneDetailComponent,resolve:{phone:PhoneDetailResolver}}
];
                                                                                                                              
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneRoutingModule { }
