import { Component } from '@angular/core';
import { ServiceDatabaseService } from '../../service/service-database.service'

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.sass']
})
export class DashboardClientComponent {

  public dataClients: object = {};

  constructor(public getDataService: ServiceDatabaseService ) {

    this.getDataService.getDatClient().subscribe((data: object) => { 
    this.dataClients = data });
   }
 

  
}
