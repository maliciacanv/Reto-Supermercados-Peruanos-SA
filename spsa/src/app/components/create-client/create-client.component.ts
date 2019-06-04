import { Component } from '@angular/core';
import { ServiceDatabaseService } from '../../service/service-database.service'

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.sass']
})
export class CreateClientComponent {

  constructor( public serviceData: ServiceDatabaseService ) { }
  
  saveData(name, firstLastName, secondLastName, age, birthData) {
    this.serviceData.addDataClient(name, firstLastName, secondLastName, age, birthData)
  }

}
