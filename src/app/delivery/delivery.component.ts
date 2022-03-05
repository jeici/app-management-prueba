import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../_services/customer.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  content:string;
  lst:any;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(
      data =>{
        this.lst = data;
      }, err =>{
        swal.fire({
          title: 'Seguridad',
          text: 'Acceso denegado',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        
        }).then(confirm=>{
          if(confirm){
            this.reloadLogin();
          }
        });
      }
    );
  }

  reloadLogin(): void {
    window.location.href='/login';
  }

}
