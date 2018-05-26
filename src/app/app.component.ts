import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigationTarget: string = 'Recipes';

  onNavigatedTo(navigationTarget: string) {
    this.navigationTarget = navigationTarget;
  }
}
