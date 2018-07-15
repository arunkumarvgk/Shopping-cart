import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";

@Directive({
    selector: '[validatePhoneSpecifications]' ,
    providers:[{
        provide: NG_VALIDATORS,
        useExisting:PhoneSpecificationValidateDirective,
        multi:true
    }]
})
export class PhoneSpecificationValidateDirective implements Validator{
    validate(formGroup: FormGroup): ValidationErrors {
        let versionControl = formGroup.controls["version"];
        let colorControl = formGroup.controls["color"];
        let frontCameraControl = formGroup.controls["frontCamera"];
        let rearCameraControl = formGroup.controls["rearCamera"];
        let ramControl = formGroup.controls["ram"];
        let internalStorageControl = formGroup.controls["internalStorage"];
        let voletControl = formGroup.controls["volet"];


        if(versionControl &&  versionControl.value){
            return !isNaN(versionControl.value)?
            (!String(versionControl.value).includes('.')?{"invalidVersion":true}:null) :
            {"versionInNumbers":true};

            
        }

        if(colorControl && colorControl.value){
           return (["red","blue","green","yellow"].includes(String(colorControl.value).toLocaleLowerCase()))? null : {"colorNotAllowed":true};
        }

        if(frontCameraControl && frontCameraControl.value){
           return !isNaN(frontCameraControl.value)?
                    ((+frontCameraControl.value<5?{"fcTooLow":{value:frontCameraControl.value}}:(+frontCameraControl.value>20?{"fcTooHigh":{value:frontCameraControl.value}}:null))) :
                    {"fcNumberFormat":true};
        }

        if(rearCameraControl && rearCameraControl.value){
           return !isNaN(rearCameraControl.value)?
                    ((+rearCameraControl.value<16?{"rcTooLow":{value:rearCameraControl.value}}:(+rearCameraControl.value>32?{"rcTooHigh":{value:rearCameraControl.value}}:null))) :
                    {"rcNumberFormat":true};
        }

        if(ramControl && ramControl.value){
           return !isNaN(ramControl.value)?
                    ((+ramControl.value<3?{"ramTooLow":{value:ramControl.value}}:(+ramControl.value>6?{"ramTooHigh":{value:ramControl.value}}:null))) :
                    {"ramNumberFormat":true};
        }

        if(internalStorageControl && internalStorageControl.value){
           return (ramControl && ramControl.value)?
                    (isNaN(internalStorageControl.value)? {"insNumberFormat":true}: null) :
                    {"enterRam":true};
        }

        return null;
    }
}