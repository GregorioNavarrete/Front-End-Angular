import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pagetitle}}</h1>
    <pm-productos></pm-productos>
  </div>
  `
})
export class AppComponent {
  pagetitle = 'WebStock Product Management de grego ';
}