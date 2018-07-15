import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { MaterialModule } from "@angular/material";
import { PhoneDetailComponent } from 'app/phone/phone-detail/phone-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PhoneRoutingModule,
    MaterialModule,
  ],
  declarations: [PhoneListComponent,PhoneDetailComponent]
})
export class PhoneModule { }
