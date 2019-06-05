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

  public totalDesviacionEstandar = 0;


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
    
    desviacionEstandar() {
      const distancia = this.dataClients.map(ele => { return Math.pow((ele.edad - this.totalEdades),2)})
      const sumaDeTodsLasDistanciasDeEdades = distancia.reduce((acumulador, objeto) => {
        return acumulador + objeto })
      const sumaMasDistancia = Math.round(sumaDeTodsLasDistanciasDeEdades/distancia.length)
      this.totalDesviacionEstandar = Math.round(Math.sqrt(sumaMasDistancia));
    }
  
      
}
  


 

  

