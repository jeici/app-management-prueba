import { Component, OnInit } from '@angular/core';
import {LogisticService} from '../_services/logistic.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './logistic.component.html',
  styleUrls: ['./logistic.component.css']
})
export class LogisticComponent implements OnInit {
  content:string;
  lst:any;
  constructor(private logisticService:LogisticService) { }

  ngOnInit(): void {
    this.logisticService.getAll().subscribe(
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
