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

  public totalPromedio = 0;

  public totalDesviacionEstandar = 0;


  constructor(  public dataService: ServiceDatabaseService,
                public getDataService: ServiceFirestoreService ) {

    this.getDataService.getDatClient().subscribe((data: object) => {  
    this.dataClients = data });

   }

   promedio() {
    const totalEdades = this.dataClients.reduce((acumulador, objeto) => {
    return acumulador + parseInt(objeto.edad)},0)
    const promedioCalculado = Math.round(totalEdades/this.dataClients.length);
    this.totalPromedio = promedioCalculado;
  }
    
  desviacionEstandar() {
    const cuadradoAlaDistancia = this.dataClients.map(ele => { return Math.pow((ele.edad - this.totalPromedio),2)})
    const totalDeCuadradoAlaDistancia = cuadradoAlaDistancia.reduce((acumulador, objeto) => {
      return acumulador + objeto })
    const totalDividido = Math.round(totalDeCuadradoAlaDistancia/cuadradoAlaDistancia.length)
    this.totalDesviacionEstandar = Math.round(Math.sqrt(totalDividido));
  }
  
      
}
  


 

  

