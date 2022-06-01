import { Component} from '@angular/core';

@Component({
  selector: 'app-server-bycli',
  templateUrl: './server-bycli.component.html',
  styleUrls: ['./server-bycli.component.css']
})
export class ServerBycliComponent {
  allowNewServer = false;
  
  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  
}
