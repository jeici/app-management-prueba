import { Component, OnInit } from '@angular/core';
import {WarehouseService} from '../_services/warehouse.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  content:string;
  lst:any;
  constructor(private warehouservice:WarehouseService

    ) { }

  ngOnInit(): void {
    this.warehouservice.getAll().subscribe(
      data =>{
        this.lst =data;
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
