import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
   //interpollation and property binding
   empDetails = [{name:"zafar",post:"developer",location:"mangalore"},{name:"ashwin",post:"developer",location:"kerala"}];
   compLogo = "./assets/logo.png";
}
