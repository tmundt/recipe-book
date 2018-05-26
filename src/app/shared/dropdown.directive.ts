import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // @Input() isShown: boolean = false;

  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
    // if (this.isShown) {
    //   this.renderer.addClass(this.elementRef.nativeElement, 'open' );
    // } else {
    //   this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    // }
  }

}
