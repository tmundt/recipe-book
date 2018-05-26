import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {
  @Output() navigatedTo = new EventEmitter<string>();
  constructor() {}

  onNavigatedTo(navigationTarget: string) {
    this.navigatedTo.emit(navigationTarget);
  }
}
