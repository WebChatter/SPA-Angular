import { Component } from '@angular/core';
import { Connection } from './connection';
import { PacketManager } from './packets/packetmanager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    Connection.connectionEstablishedEmitter.subscribe(success => {
      if (success) {
        PacketManager.prepareInPackets();
      }
    });

    if (!Connection.connectionIsEstablished) {
      Connection.startConnecting();
    }
  }
 
}  
