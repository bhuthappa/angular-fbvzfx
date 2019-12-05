import { Component } from '@angular/core';
import  *  as  data  from  './data.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
 // title = 'Angular Example';

  products: any = (data as any).default;

  constructor(){}
  ngOnInit(){
    console.log(data);


  name = 'Angular';
}
}