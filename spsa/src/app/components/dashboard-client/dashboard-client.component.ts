import { Component } from '@angular/core';
import { ServiceDatabaseService } from '../../service/service-database.service';
import { ServiceFirestoreService } from '../../service/service-firestore.service';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.sass']
})
export class DashboardClientComponent {

  public dataClients;

  public totalEdades;

  constructor(  public dataService: ServiceDatabaseService,
                public getDataService: ServiceFirestoreService ) {

    this.getDataService.getDatClient().subscribe((data: object) => { 
    this.dataClients = data });

     this.dataService.total.subscribe((total: number ) => {
      this.totalEdades = total })
   }

   dataClientsForPromedio(){
     this.dataService.promedio(this.dataClients)    
    }
    
    


 

  
}
