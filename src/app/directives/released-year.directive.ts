import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateYearReleased():ValidatorFn {
    return (c:AbstractControl):ValidationErrors => {
        if(isNaN(c.value)){
            return {"invalidInput":true};
        }
        return c.value ? 
                ((+c.value < 2010) ? 
                    {"tooOld":true}: 
                    ((+c.value > 2017)?{"veryNew":{value:c.value}} : null)) :
             null;
    }
}

@Directive({
    selector:"[releasedYearValidate][ngModel]",
    providers:[
        {
            provide:NG_VALIDATORS,
            useExisting:ReleasedYearDirective,
            multi:true
        }
    ]
})
export class ReleasedYearDirective implements Validator{

    //@Input() releasedYearValidate: string;
    validator: ValidatorFn;

    constructor() {
        this.validator = validateYearReleased();
    }

    validate(c: AbstractControl): ValidationErrors {
        return this.validator(c);//c.value ? validateYearReleased() : null;
    }

}