import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html' 
})

export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'offline';

    serverCreationStatus: string = 'No server created'; 
    

    serverName = "";
    updatedServerName = "";
    serverCreated: boolean = false;

    
    getServerStatus(){
        return this.serverStatus;
    }
    
    createNewServer(){
      this.serverCreated = true; 
      this.serverCreationStatus = 'server has been created'; 
      
    }

    getinputdata(event: any){
        return this.serverName= (<HTMLInputElement>event.target).value
    }
    
    constructor(){
      this.serverStatus=Math.random()>0.5?'online':'offline';  
    }

    getColor(){
       return this.serverStatus === 'online'?'green':'red';
    }
}