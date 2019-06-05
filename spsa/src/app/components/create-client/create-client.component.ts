import { Component } from '@angular/core';
import { ServiceDatabaseService } from '../../service/service-database.service'

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.sass']
})
export class CreateClientComponent {

  fechaDnacimiento: any;

  constructor( public serviceData: ServiceDatabaseService ) { }
  
  saveData(name, firstLastName, secondLastName, age, birthData) {
     const defuncion = () => {
       const fecha = new Date(birthData)
      let year = fecha.getFullYear();
      let month = fecha.getMonth();
      let day = fecha.getDate();

      const años = year/parseInt(age)     
      const newDate = new Date(year + años, month, day)
      return newDate
     }
       this.serviceData.addData(name, firstLastName, secondLastName, age, birthData, defuncion )
    }
   
  }


