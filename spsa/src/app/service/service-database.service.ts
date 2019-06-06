import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServiceFirestoreService } from './service-firestore.service'

export interface Client {
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  edad: string,
  fechaDeNacimiento: string,
  fechaDefuncion: any,
}

@Injectable({
  providedIn: 'root'
})
export class ServiceDatabaseService {

  public clientData : Client = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    edad: '',
    fechaDeNacimiento: '',
    fechaDefuncion: '',
  }
    
  constructor( public serviceFirestore: ServiceFirestoreService ) {} 
  
  addData(name, firstLastName, secondLastName, age, birthData, defuncion) {
    const data = {
      ...this.clientData,
      nombre: name,
      apellidoPaterno: firstLastName,
      apellidoMaterno: secondLastName,
      edad: age,
      fechaDeNacimiento: birthData,
      fechaDefuncion: defuncion(),
    }
      this.serviceFirestore.addDatClient(data);
    }

 
 
}



  



