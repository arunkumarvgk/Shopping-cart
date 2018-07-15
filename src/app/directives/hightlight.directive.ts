import { Directive,ElementRef,HostListener,Input } from "@angular/core";


@Directive({
    selector:"[myHighlight]"
})
export class myHighlight{

    @Input('myHighlight') highLightColor: string;
    constructor(private el:ElementRef){}

    private highlight(color:string|null){
        this.el.nativeElement.style.background=color;
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.highlight("Yellow");
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.highlight(null);
    }
}