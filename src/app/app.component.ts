import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular Application';
  showForm()
  {
    console.log("Contact Form loaded");
    window.open("../assets/contactus.html","_blank",'addressbar=no,titlebar=no,location=no,height=300,width=600,scrollbars=no,status=yes,toolbar=no,top=100,left=500');
    

  }
}
