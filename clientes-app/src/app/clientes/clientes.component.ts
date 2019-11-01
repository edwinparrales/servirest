import { Component, OnInit } from '@angular/core';
import { Cliente} from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'

})
export class ClientesComponent implements OnInit {
  clientes: Cliente[];


  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(

      clientes =>   this.clientes = clientes
    );
  }

 //metodo eliminar
delete(cliente:Cliente):void{
  swal.fire({
title: 'Are you sure?',
text: `¿Seguro que desea eliminar al cliente!${cliente.nombre} ${cliente.apellido}?`,
type: 'warning',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText: 'Yes, delete it!'
}).then((result) => {
if (result.value) {
  this.clienteService.delete(cliente.id).subscribe(
   response =>{
     this.clientes = this.clientes.filter(cli =>cli !== cliente)
     swal.fire(
       'Deleted!',
        `Cliente ${cliente.nombre} eliminado con exito.`,
       'success'
       )

      })

   }
 })

}

//fin metodo eliminar




}
