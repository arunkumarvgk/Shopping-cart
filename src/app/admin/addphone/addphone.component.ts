import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";
import { Phone, Specification } from 'app/model/phone.model';
import { ProductService } from 'app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addphone',
  templateUrl: './addphone.component.html',
  styleUrls: ['./addphone.component.css']
})
export class AddphoneComponent implements OnInit {

  isTDForm: Boolean =false;

  rAddPhoneFrm :FormGroup;
  brand: FormControl;
  releasedYear: FormControl;
  version: FormControl;
  color: FormControl;
  frontCamera: FormControl;
  rearCamera: FormControl;
  ram: FormControl;
  internalStorage: FormControl;
  volet: FormControl;
  imageUrl: FormControl;
  phone: Phone = new Phone();

  constructor(private productService:ProductService, private router: Router) { }
  
  ngOnInit() {
    this.brand= new FormControl("",[Validators.required,Validators.minLength(4)],this.validateBrandNameInitCap.bind(this));
    this.releasedYear= new FormControl("",[Validators.required,this.validateReleasedYear()]);
    this.version= new FormControl("",[Validators.required]);
    this.color= new FormControl("",[Validators.required,this.validateColor()]);
    this.frontCamera= new FormControl("",[Validators.required,this.validateFc()]);
    this.rearCamera= new FormControl({value: 'Enter Front Camera to enable', disabled:true},[Validators.required,this.validateRc()]);
    this.ram= new FormControl("",[Validators.required,this.validateRAM()]);
    this.internalStorage= new FormControl({value: 'Enter RAM to enable', disabled:true},[Validators.required]);
    this.volet= new FormControl("",[Validators.required]);
    this.imageUrl= new FormControl("");
    
    this.rAddPhoneFrm = new FormGroup({
      brand:this.brand, 
      releasedYear:this.releasedYear, 
      version:this.version, 
      color:this.color, 
      frontCamera:this.frontCamera, 
      rearCamera:this.rearCamera, 
      ram:this.ram, 
      internalStorage:this.internalStorage,
      volet:this.volet,
      imageUrl:this.imageUrl
    });
  }

  onSubmitReactive(rForm :FormGroup){
    this.phone.specification= new Specification();
    this.phone.cost = 24800;
    this.phone.otherFeatures =[rForm.value.brand+" FlashMob",rForm.value.brand+" design"];
    this.phone.brand = rForm.value.brand;
    this.phone.released = rForm.value.releasedYear;
    this.phone.brand = rForm.value.brand;
    this.phone.imageUrl = "/assets/images/"+rForm.value.imageUrl;
    this.phone.specification.version = rForm.value.version;
    this.phone.specification.color = rForm.value.color;
    this.phone.specification.frontCamera = rForm.value.frontCamera;
    this.phone.specification.rearCamera = rForm.value.rearCamera;
    this.phone.specification.RAM = rForm.value.ram;
    this.phone.specification.internalStorage = rForm.value.internalStorage;
    this.phone.specification.volte = rForm.value.volet;

    this.productService.addPhone(this.phone)
    .subscribe(res => {
        alert("Successfully Added :-)");
        this.router.navigate(['phone/list/'+res.json().brand]);
    },
    err => {
       alert("Successfully Added :-) ");
    });
  }

  validateBrandNameInitCap = function(ctrl:FormControl):{[key:string]:any}{   
    return new Promise( resolve =>{
      let brandName:Array<string>;

      if(ctrl.value.length>0){
        brandName = ctrl.value.split(" ");
        (brandName.every(bname => bname[0].toUpperCase() == bname[0])) ? resolve(null) : resolve({initCapReq:true});
      }  
    }); 
  }

  validateReleasedYear(){
    return (control: FormControl):{[key:string]:any}=>{
      let year = control.value;
      let validDate = (year-new Date().getFullYear());
      if(year && isNaN(year)){
        return {invalidReleaseYear:true};
      }
      return (year && (validDate>=7 || validDate<=-7)) ? {validationresult:{value:validDate}}:null; 
    }
  }

  validateVersion(){
    return (control:FormControl):{[key:string]:any}=>{
      let version = control.value;
      if(version && isNaN(version)){
        return {invalidVersion:true};
      }

      return (version) ? (version.includes(".") ? null : {dotSeperated:true}):null;
    }
  }

  validateColor(){
    return (control:FormControl):{[key:string]:any}=>{
      let color = control.value;
      if(color && !isNaN(color)){
        return {invalidColor:true};
      }

      return (color) ? (["red","blue","yellow","green"].includes(color.toLowerCase())) ?null : {onlyRBGY:{value:color}} : null;
    }
  }
  
  validateFc(){
    return (control:FormControl):{[key:string]:any}=>{
      let frontCamera = control.value;

      if(frontCamera && isNaN(frontCamera)){
        return {invalidFrontCamera:true};
      }
      
      if (frontCamera) {
        control.parent.controls['rearCamera'].setValue("Enter Front Camera to enable");
        control.parent.controls['rearCamera'].disable();
        if((frontCamera > 32 || frontCamera<12)) {
          return {fcNotInRange:true};
        } else if(!((frontCamera%2) == 0)){
          return {notOdd:true}
        } else{
          control.parent.controls['rearCamera'].setValue("");
          control.parent.controls['rearCamera'].enable();
        }
      } 

      return null;
    }
  }

  validateRc(){
    return (control:FormControl):{[key:string]:any}=>{
      let rearCamera = control.value;

      if(rearCamera && isNaN(rearCamera)){
        return {invalidRearCamera:true};
      }

      if(!(control && control.parent && control.parent.controls && control.parent.controls['frontCamera'].value)){
        return null;
      }

      let FC_RC_RATIO: number=((rearCamera-control.parent.controls['frontCamera'].value)/rearCamera)*100;
      console.log(FC_RC_RATIO+" 99999999999");
      return (rearCamera) ? 
        ( FC_RC_RATIO>=40 && FC_RC_RATIO<=50 ) ? null : {fcRcNotMatching:{value:FC_RC_RATIO}} 
        : null;
    }
  }

  validateRAM(){
    return (control:FormControl):{[key:string]:any}=>{
      let ram = control.value;

      if(ram && isNaN(ram)){
        return {invalidRAM:true};
      }

      if (ram) {
        control.parent.controls['internalStorage'].setValue("Enter RAM to enable");
        control.parent.controls['internalStorage'].disable();
        if((ram >6 || ram <3)){
          return {ramNotInRange:true};
        }else{
          control.parent.controls['internalStorage'].setValue("");
          control.parent.controls['internalStorage'].enable();
        }
      } 
    }
  }

}
