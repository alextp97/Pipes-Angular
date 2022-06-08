import { REFERENCE_PREFIX } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';


import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // i18nSelect
  nombre: string = 'Alejandro';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Gabriel', 'Elena', 'Ana'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando'
  }

  // Para el i18nSelect
  cambiarCliente() {
      this.nombre = 'Melissa';
      this.genero = 'femenino';
  }

  // i18nPlural
  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Alejandro',
    edad: 24,
    direccion: 'Jaén, Andalucía, España'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
   
    setTimeout(()  => {
      resolve('Tenemos datos de la promesa');
    }, 3500 );
  });
}
