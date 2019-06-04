import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServiceFirestoreService } from './service-firestore.service'

export interface Client {
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  edad: string,
  fechaDeNacimiento: string,
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
  }

  public totalEdades = new BehaviorSubject(0)
  total = this.totalEdades.asObservable()
  
  constructor( public serviceFirestore: ServiceFirestoreService ) {} 
  
  addData(name, firstLastName, secondLastName, age, birthData) {
    const data = {
      ...this.clientData,
      nombre: name,
      apellidoPaterno: firstLastName,
      apellidoMaterno: secondLastName,
      edad: age,
      fechaDeNacimiento: birthData,
    }
      this.serviceFirestore.addDatClient(data);
  }

  promedio(obj) {
    const total = obj.reduce((acumulador, objeto) => {
    return acumulador + parseInt(objeto.edad)},0)
    const promedio = Math.round(total/obj.length);
    this.totalEdades.next(promedio)
  }



  



}
