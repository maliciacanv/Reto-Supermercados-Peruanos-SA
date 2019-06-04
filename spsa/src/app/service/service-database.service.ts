import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

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
  
  constructor(public addData: AngularFirestore) {}
  
  addDataClient(name, firstLastName, secondLastName, age, birthData) {
    console.log(name, firstLastName, secondLastName, age, birthData)
    const data = {
      ...this.clientData,
      nombre: name,
      apellidoPaterno: firstLastName,
      apellidoMaterno: secondLastName,
      edad: parseInt(age),
      fechaDeNacimiento: birthData,
    }
      this.addData.collection('clientes').add(data);
  }

}
