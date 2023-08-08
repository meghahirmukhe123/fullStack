import { Component } from '@angular/core';
import{NgForm} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basicForm';

  userdata:any={};

  getData(data:any)
  {
    console.warn(data);
    this.userdata=data;
  }
}
