import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AddphoneComponent } from "app/admin/addphone/addphone.component";
import { ReleasedYearDirective } from "app/directives/released-year.directive";
import { PhoneSpecificationValidateDirective } from "app/directives/phone-spec-validator.directive";
import { ValidateOnBlurDirective } from "app/directives/validate-onblur.directive";

const adminRoutes: Routes=[
    {path:"addPhone",component:AddphoneComponent},
    {path:"admin",component:AdminComponent} 
    ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AdminComponent,
        AddphoneComponent,
        ReleasedYearDirective,
        PhoneSpecificationValidateDirective,
        ValidateOnBlurDirective
        ],
    providers: [],
})
export class AdminModule {
     /* {
        path:"",
        component:AdminComponent
        ,children:[
            {path:"addPhone",component:AddphoneComponent}
        ]

    }   */
 }
