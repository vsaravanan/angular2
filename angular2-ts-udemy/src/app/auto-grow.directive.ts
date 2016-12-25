import {Directive, ElementRef, Renderer, Input, HostListener} from '@angular/core';

@Directive({
     selector: '[autoGrow]'
})

export class AutoGrowDirective  {


    constructor(private el: ElementRef, private renderer: Renderer) {}


    @HostListener('focus')
    onfocus() {
        this.el.nativeElement.style.backgroundColor = 'red';
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '300px');
    }

    @HostListener('blur')
    onblur() {
        this.el.nativeElement.style.backgroundColor = 'yellow';
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
    }

}
